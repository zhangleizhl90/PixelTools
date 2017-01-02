/**
 * Created by zhanglei on 2017/1/2.
 */
import React, { Component } from 'react';
import './PixelCanvas.css'

export class Layer {
    constructor() {
        this.row = 40;
        this.col = 40;

        this.data = [];
        for (let i = 0; i < this.row; ++i) {
            this.data.push([]);
        }
    }

    setPixel(i, j, color) {
        this.data[i][j] = color;
    }

    getPixel(i, j) {
        return this.data[i][j];
    }
}

class PixelMap {
    constructor() {
        this.layers = testData();
    }

    draw(ctx) {
        this.drawLayers(ctx)
    }

    /**
     * 绘制所有图层
     * @param ctx
     */
    drawLayers(ctx) {
        for (let layer of this.layers) {
            PixelMap.drawLayer(ctx, layer);
        }
    }

    /**
     * 绘制单个图层
     * @param ctx
     * @param layer
     */
    static drawLayer(ctx, layer) {

        let pixelWidth = ctx.canvas.width / layer.row;
        let pixelHeight = ctx.canvas.height / layer.col;

        for (let i = 0; i < layer.row; ++i) {
            for (let j = 0; j < layer.col; ++j) {
                let pixel = layer.getPixel(i, j);
                if (pixel) {
                    ctx.fillStyle = pixel;
                    ctx.fillRect(i * pixelHeight, j * pixelWidth, pixelWidth, pixelHeight);
                }
            }
        }
    }
}

function testData() {
    let data = [];
    let layer = new Layer();
    layer.setPixel(10, 10, 'red');
    data.push(layer);
    return data;
}

class PixelCanvas extends Component {

    constructor() {
        super();

        this.pixelMap = new PixelMap();
        this.background = undefined;
    }

    componentDidMount() {
        let canvas = document.getElementById('canvas');
        canvas.addEventListener('click', (event) => this.onClickEvent(event), false);
        let ctx = canvas.getContext('2d');
        this.draw(ctx);
    }

    onClickEvent(event) {

    }

    /**
     * 绘制图像
     * @param ctx
     */
    draw(ctx) {
        this.drawBackground(ctx);
        this.pixelMap.draw(ctx);
    }

    /**
     * 回执背景，默认为透明背景
     * @param ctx
     */
    drawBackground(ctx) {
        if (this.background) {
            ctx.fillStyle = this.background;
            ctx.fillRect(0, 0, this.width, this.height);
        } else {
            PixelCanvas.drawTransactionBackground(ctx);
        }
    }

    /**
     * 透明背景，棋盘
     * @param ctx
     */
    static drawTransactionBackground(ctx) {
        let isWhite = true;

        let blockWidthCount = 10;
        let blockHeightCount = 10;

        let blockWidth = ctx.canvas.width / blockWidthCount;
        let blockHeight = ctx.canvas.height / blockHeightCount;

        for (let i = 0; i < blockHeightCount; ++i) {
            isWhite = i % 2 === 0;
            for (let j = 0; j < blockWidthCount; ++j) {
                ctx.fillStyle =  isWhite ? '#FFF' : '#999';
                isWhite = !isWhite;
                ctx.fillRect(i * blockWidth, j * blockHeight, blockWidth, blockHeight);
            }
        }
    }

    render() {
        return (
            <canvas id="canvas" width={400} height={400}>Your browser is not supported!</canvas>
        );
    }
}

export default PixelCanvas;