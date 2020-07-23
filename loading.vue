<template>
    <div v-if="visable" class="layer">
        <div class="l-box">
            <div class="l-icon"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'loading',
    data() {
        return {
            visable: false
        }
    }
}
</script>
<style lang="less" scoped>
    .layer {
        z-index: 9999;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0);
    }
    .l-box {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.7);
        padding: 40px;
        border-radius: 12px;
        text-align: center;
        .l-icon {
            width: 64px;
            height: 64px;
            margin: 0 auto;
            border-radius: 50%;
            box-sizing: border-box;
            border: 4px solid transparent;
            border-bottom-color: rgb(204, 204, 204);
            border-top-color: rgb(204, 204, 204);
            border-right-color: rgb(204, 204, 204);
            -webkit-animation: loading-gif 1s infinite linear;
            animation: loading-gif 1s infinite linear;
        }
    }
    @-webkit-keyframes loading-gif {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes loading-gif {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
</style>