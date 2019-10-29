import { Renderbuffer } from './Renderbuffer';
import { Texture } from './Texture';
export class Framebuffer {
    constructor(gl, appState) {
        this.gl = gl;
        this.appState = appState;
        this.framebuffer = null;
        this.numColorTargets = 0;
        this.colorAttachments = [];
        this.colorAttachmentEnums = [];
        this.colorAttachmentTargets = [];
        this.depthAttachment = null;
        this.depthAttachmentTarget = null;
        this.width = 0;
        this.height = 0;
        this.restore();
    }
    restore() {
        const appState = this.appState;
        if (appState.drawFramebuffer === this) {
            appState.drawFramebuffer = null;
        }
        if (appState.readFramebuffer === this) {
            appState.readFramebuffer = null;
        }
        this.framebuffer = this.gl.createFramebuffer();
        return this;
    }
    colorTarget(index, attachment, target) {
        const gl = this.gl;
        if (target === undefined) {
            target = (attachment.is3D) ? 0 : gl.TEXTURE_2D;
        }
        const colorAttachmentEnums = this.colorAttachmentEnums;
        const colorAttachments = this.colorAttachments;
        const colorAttachmentTargets = this.colorAttachmentTargets;
        if (index >= this.numColorTargets) {
            const numColorTargets = index + 1;
            colorAttachmentEnums.length = numColorTargets;
            colorAttachments.length = numColorTargets;
            colorAttachmentTargets.length = numColorTargets;
            for (let i = this.numColorTargets; i < numColorTargets - 1; i++) {
                colorAttachmentEnums[i] = gl.NONE;
                colorAttachments[i] = null;
                colorAttachmentTargets[i] = 0;
            }
            this.numColorTargets = numColorTargets;
        }
        colorAttachmentEnums[index] = gl.COLOR_ATTACHMENT0 + index;
        colorAttachments[index] = attachment;
        colorAttachmentTargets[index] = target;
        const currentFramebuffer = this.bindAndCaptureState();
        if (attachment instanceof Renderbuffer) {
            gl.framebufferRenderbuffer(gl.DRAW_FRAMEBUFFER, colorAttachmentEnums[index], gl.RENDERBUFFER, attachment.renderbuffer);
        }
        else if (attachment.is3D) {
            gl.framebufferTextureLayer(gl.DRAW_FRAMEBUFFER, colorAttachmentEnums[index], attachment.texture, 0, target);
        }
        else {
            gl.framebufferTexture2D(gl.DRAW_FRAMEBUFFER, colorAttachmentEnums[index], target, attachment.texture, 0);
        }
        gl.drawBuffers(this.colorAttachmentEnums);
        this.width = attachment.width;
        this.height = attachment.height;
        this.restoreState(currentFramebuffer);
        return this;
    }
    depthTarget(attachment, target) {
        const gl = this.gl;
        if (target === undefined) {
            target = (attachment.is3D) ? 0 : gl.TEXTURE_2D;
        }
        const currentFramebuffer = this.bindAndCaptureState();
        this.depthAttachment = attachment;
        this.depthAttachmentTarget = target;
        if (attachment instanceof Renderbuffer) {
            gl.framebufferRenderbuffer(gl.DRAW_FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, attachment.renderbuffer);
        }
        else if (attachment.is3D) {
            gl.framebufferTextureLayer(gl.DRAW_FRAMEBUFFER, gl.DEPTH_ATTACHMENT, attachment.texture, 0, target);
        }
        else {
            gl.framebufferTexture2D(gl.DRAW_FRAMEBUFFER, gl.DEPTH_ATTACHMENT, target, attachment.texture, 0);
        }
        this.width = attachment.width;
        this.height = attachment.height;
        this.restoreState(currentFramebuffer);
        return this;
    }
    resize(width, height) {
        const gl = this.gl;
        if (!width) {
            width = gl.drawingBufferWidth;
        }
        if (!height) {
            height = gl.drawingBufferHeight;
        }
        const currentFramebuffer = this.bindAndCaptureState();
        const colorAttachmentEnums = this.colorAttachmentEnums;
        const colorAttachments = this.colorAttachments;
        const colorAttachmentTargets = this.colorAttachmentTargets;
        for (let i = 0; i < this.numColorTargets; i++) {
            const attachment = colorAttachments[i];
            if (!attachment) {
                continue;
            }
            attachment.resize(width, height);
            if (attachment instanceof Texture) {
                // Texture resizing recreates the texture object.
                if (attachment.is3D) {
                    gl.framebufferTextureLayer(gl.DRAW_FRAMEBUFFER, colorAttachmentEnums[i], attachment.texture, 0, colorAttachmentTargets[i]);
                }
                else {
                    gl.framebufferTexture2D(gl.DRAW_FRAMEBUFFER, colorAttachmentEnums[i], colorAttachmentTargets[i], attachment.texture, 0);
                }
            }
        }
        const depthAttachment = this.depthAttachment;
        if (depthAttachment) {
            depthAttachment.resize(width, height);
            if (depthAttachment instanceof Texture) {
                // Texture resizing recreates the texture object.
                if (depthAttachment.is3D) {
                    gl.framebufferTextureLayer(gl.DRAW_FRAMEBUFFER, gl.DEPTH_ATTACHMENT, depthAttachment.texture, 0, this.depthAttachmentTarget);
                }
                else {
                    gl.framebufferTexture2D(gl.DRAW_FRAMEBUFFER, gl.DEPTH_ATTACHMENT, this.depthAttachmentTarget, depthAttachment.texture, 0);
                }
            }
        }
        this.width = width;
        this.height = height;
        this.restoreState(currentFramebuffer);
        return this;
    }
    delete() {
        const gl = this.gl;
        const appState = this.appState;
        if (this.framebuffer) {
            gl.deleteFramebuffer(this.framebuffer);
            this.framebuffer = null;
            if (appState.drawFramebuffer === this) {
                gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
                appState.drawFramebuffer = null;
            }
            if (appState.readFramebuffer === this) {
                gl.bindFramebuffer(gl.READ_FRAMEBUFFER, null);
                appState.readFramebuffer = null;
            }
        }
        return this;
    }
    getStatus() {
        const gl = this.gl;
        const currentFramebuffer = this.bindAndCaptureState();
        const status = gl.checkFramebufferStatus(gl.DRAW_FRAMEBUFFER);
        this.restoreState(currentFramebuffer);
        return status;
    }
    bindForDraw() {
        const gl = this.gl;
        const appState = this.appState;
        if (appState.drawFramebuffer !== this) {
            gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, this.framebuffer);
            appState.drawFramebuffer = this;
        }
        return this;
    }
    bindForRead() {
        const gl = this.gl;
        const appState = this.appState;
        if (appState.readFramebuffer !== this) {
            gl.bindFramebuffer(gl.READ_FRAMEBUFFER, this.framebuffer);
            appState.readFramebuffer = this;
        }
        return this;
    }
    bindAndCaptureState() {
        const gl = this.gl;
        const appState = this.appState;
        const currentFramebuffer = appState.drawFramebuffer;
        if (currentFramebuffer !== this) {
            gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, this.framebuffer);
        }
        return currentFramebuffer;
    }
    restoreState(framebuffer) {
        const gl = this.gl;
        if (framebuffer !== this) {
            gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, (framebuffer) ? framebuffer.framebuffer : null);
        }
        return this;
    }
}
//# sourceMappingURL=Framebuffer.js.map