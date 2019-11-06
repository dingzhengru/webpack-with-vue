<template>
    <div id="app">
        <h1>Webpack budle vue</h1>
        <div class="test">
            <p>{{ msg }}</p>
        </div>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Test from './components/Test.vue'

export default {
    name: 'app',
    data: function() {
    return {
            msg: 'this is msg'
        }
    },
    created: function() {
        console.log('created')
    },
    methods: {

    },
    components: {
        // HelloWorld: HelloWorld,
        // Test: Test
    }
}
</script>

<style lang="scss">

$test-color: red;

.test {
    color: $test-color;
}


</style>
