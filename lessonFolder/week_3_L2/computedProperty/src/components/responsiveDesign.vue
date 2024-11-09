<template>
    <div class="responsive">
        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>

            <a href="#">Services</a>

            <a href="#">Contact</a>
        </nav>
        <div class="container">
            <div class="content">
                <div class="card">Card 1</div>
                <div class="card">Card 2</div>

                <div class="card">Card 3</div>

                <div class="card">Card 4</div>
            </div>
        </div>
    </div>
</template>
<style>
nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px 0;
}
nav a {
    margin: 10px;
    padding: 10px 15px;
    background: #f2f2f2;
    color: #333;
    text-decoration: none;
    border-radius: 5px;
}
.responsive {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
.container {
    max-width: 1200px;
    width: 100%;
    margin: auto;
    padding: 20px;
}
.content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.card {
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    flex: 1;
}
@media (min-width: 600px) {
    nav {
        justify-content: space-around;
    }
    .content {
        flex-direction: row;
        flex-wrap: wrap;
    }
    .card {
        flex: 1 1 calc(33.333% - 20px);
    }
}
@media (min-width: 600px) {
    .card {
        flex: 1 1 calc(25% - 20px);
    }
}
</style>
