<template>
    <div class="layout">
        <Layout style="height: 100%;">
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses" :updateActiveName="updateItem">
                    <div class="logo" @click="toHome">
                        <img src="../public/logo.png" alt="">
                    </div>
                    <router-link :to="{name: 'Blog', params: {title: 'mac'}}">
                        <MenuItem name="1-1">
                            <Icon type="social-apple"></Icon>
                            <span>Mac</span>
                        </MenuItem>
                    </router-link>
                    <router-link :to="{name: 'Blog', params: {title: 'markdown'}}">
                        <MenuItem name="1-2">
                            <Icon type="social-markdown"></Icon>
                            <span>Markdown</span>
                        </MenuItem>
                    </router-link>
                    <router-link :to="{name: 'Blog', params: {title: 'web'}}">
                        <MenuItem name="1-3">
                            <Icon type="ios-world"></Icon>
                            <span>Web</span>
                        </MenuItem>
                    </router-link>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
                </Header>
                <Content :style="{margin: '10px', padding: '10px', background: '#fff', minHeight: '260px', overflowY: 'auto'}">
                    <router-view/>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data () {
            return {
                isCollapsed: false
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            updateItem () {
                this.$nextTick(function () {
                    this.toHome();
                })
            },
            toHome () {
                this.$router.replace({path: '/'});
            }
        },
        mounted: function () {
            console.log(this.$route.params.title);
        }
    }
</script>

<style lang="less" scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
        .layout-header-bar{
            background: #fff;
            box-shadow: 0 1px 1px rgba(0,0,0,.1);
        }
        .layout-logo-left{
            width: 90%;
            height: 30px;
            background: #5b6270;
            border-radius: 3px;
            margin: 15px auto;
        }
        .menu-icon{
            transition: all .3s;
        }
        .rotate-icon{
            transform: rotate(-90deg);
        }
        .menu-item span{
            display: inline-block;
            overflow: hidden;
            width: 69px;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: bottom;
            transition: width .2s ease .2s;
        }
        .menu-item i{
            transform: translateX(0px);
            transition: font-size .2s ease, transform .2s ease;
            vertical-align: middle;
            font-size: 16px;
        }
        .collapsed-menu span{
            width: 0px;
            transition: width .2s ease;
        }
        .collapsed-menu i{
            transform: translateX(5px);
            transition: font-size .2s ease .2s, transform .2s ease .2s;
            vertical-align: middle;
            font-size: 22px;
        }
        .logo {
            width: 100%;
            height: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            img {
                width: 50px;
                height: 50px;
            }
        }
    }
</style>