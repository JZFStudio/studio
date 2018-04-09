<template>
    <div class="blog" :style="{fontSize: fontSize + 'px'}">
        <div class="fontSizeChange">
            <ButtonGroup size="large">
                <Button :disabled="isMax" icon="ios-plus-empty" @click="add"></Button>
                <Button :disabled="isMin" icon="ios-minus-empty" @click="minus"></Button>
            </ButtonGroup>
            <br>
            <span :style="{width: fontSize * 2 + 'px', height: fontSize + 'px', lineHeight: fontSize + 'px', borderRadius: fontSize / 2 + 'px'}">{{fontSize}}</span>
        </div>
        <div class="content" v-html="content"></div>
    </div>
</template>

<script>
    import mac_md from '../../data/Mac'
    import markdown_md from '../../data/Markdown'
    import web_md from '../../data/Web'
    import utils from '../public/utils'

    export default {
        name: "Mac",
        data: function () {
            return {
                md: mac_md,
                fontSize: 16,
                isMax: false,
                isMin: false
            }
        },
        methods: {
            add: function () {
                if (this.fontSize >= 28) {
                    this.isMax = true;
                } else {
                    this.fontSize += 2;
                }
                this.isMin = false;
            },
            minus: function () {
                if (this.fontSize <= 12) {
                    this.isMin = true;
                } else {
                    this.fontSize -= 2;
                }
                this.isMax = false;
            }
        },
        computed: {
            content: function () {
                return utils.markdown(this.md);
            }
        },
        watch: {
            '$route': function () {
                let title = this.$route.params.title;
                switch (title) {
                    case 'mac':
                        this.md = mac_md;
                        break;
                    case 'markdown':
                        this.md = markdown_md;
                        break;
                    case 'web':
                        this.md = web_md;
                        break;
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .blog {
        position: relative;
        .fontSizeChange {
            text-align: center;
            display: inline-block;
            position: absolute;
            right: 5px;
            top: 5px;
            span {
                display: inline-block;
                background-color: deepskyblue;
                color: #fff;
                text-align: center;
                margin-right: 5px;
            }
        }
    }
</style>