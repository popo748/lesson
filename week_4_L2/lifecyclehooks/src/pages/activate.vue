<template>
    <v-tabs v-model="activeTab" height="150">
        <v-tab value="tab1">Tab 1</v-tab>
        <v-tab value="tab2">Tab 2</v-tab>

        <v-tab-items v-model="activeTab">
            <v-tab-item value="tab1">
                <keep-alive>
                    <TabOne v-if="activeTab==='tab1'" tabName="tab1"/>
                </keep-alive>
            </v-tab-item>
            <v-tab-item value="tab2">
                <keep-alive>
                    <TabOne v-if="activeTab==='tab2'" tabName="tab2"/>
                </keep-alive>
            </v-tab-item>
        </v-tab-items>
    </v-tabs>
</template>
<script>
export default{
    data(){
        return{
            activeTab:'tab1',
        }
    }
}

</script>