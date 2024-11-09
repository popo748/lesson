<template>
    <v-container>
        <div class="image-grid">
            <v-img
                v-for="(image, index) in images"
                :key="index"
                :src="image.src"
                @click="selectedImage = image"
            />
        </div>

        <v-dialog
            v-model="showDialog"
            max-width="500"
        >
            <v-card v-if="selectedImage">
                <v-img :src="selectedImage.src"></v-img>
                <v-card-text>{{ selectedImage.description }}</v-card-text>
                <v-btn @click="showDialog = false">Close</v-btn>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            images: [
                {
                    src: "https://placehold.co/600x400",
                    description: "beautiful landscape",
                },
                {
                    src: "https://placehold.co/600x400",
                    description: "cute doge",
                },
            ],
            selectedImage: null,
            showDialog: false,
        };
    },

    watch: {
        selectedImage() {
            this.showDialog = this.selectedImage !== null;
        },
    },
};
</script>

<style>
.image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

.image-grid img {
    width: 100%;
    height: auto;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.image-grid img:hover {
    transform: scales (1.05);
}
</style>
