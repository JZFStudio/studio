<template>
    <div class="game">
        <Row :gutter="10">
            <Col :lg="{ span: 8}" :sm="{ span: 6 }" :xs="{ span: 8 }">
                <Card class="card" @click.native="goToGame">
                    <p slot="title" class="title">
                        <img src="../../static/img/puzzle.png" alt="Puzzle">
                    </p>
                    <p class="des">This is a puzzle game.</p>
                </Card>
            </Col>
            <Col :lg="{ span: 8}" :sm="{ span: 6 }" :xs="{ span: 8 }">
                <Card class="card">
                    <p slot="title" class="title">
                        <img src="../../static/img/puzzle.png" alt="Puzzle">
                    </p>
                    <p class="des">This is a puzzle game.</p>
                </Card>
            </Col>
            <Col :lg="{ span: 8}" :sm="{ span: 6 }" :xs="{ span: 8 }">
                <Card class="card">
                    <p slot="title" class="title">
                        <img src="../../static/img/puzzle.png" alt="Puzzle">
                    </p>
                    <p class="des">This is a puzzle game.</p>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "Game",
        methods: {
            goToGame () {
                console.log('path');
                this.$router.push({path: '/game/puzzle'});
            }
        }
    }
</script>

<style lang="less" scoped>
    .game {
        .card {
            _min-width: 185px;
            cursor: pointer;
            .title {
                height: 138px;
                img {
                    display: inline-block;
                    width: 100%;
                }
            }
        }
    }
</style>