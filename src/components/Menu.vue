<template>
    <nav>
        <ul>
            <router-link to="/">求人検索</router-link>
            <router-link to="/favorites">お気に入り</router-link>
            <router-link to="/tips">TIPS</router-link>
            <router-link to="/profile">プロフィール</router-link>
        </ul>
    </nav>
</template>
<style scoped>
* {
    padding: 0;
    margin: 0;
}
ul {
    display: flex;
    list-style: none;
    margin: 0 auto;
    width: 800px;
}
li {
    padding: 10px;
    margin: 0 auto;
    text-align: center;
    background-color: deeppink;
    color: #eee;
    width: 200px;
}
li:hover {
    background-color: firebrick;
    cursor: pointer;
}
</style>