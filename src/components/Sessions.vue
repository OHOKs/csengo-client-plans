<template>
    <div class="full-screen-container">
        <div class="search-container">
            <input v-model="searchQuery" type="text" placeholder="Keresés" class="search-bar" />
        </div>

        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Kezdet</th>
                        <th>Vég</th>
                        <th>Zenék</th>
                        <th>Szerkesztés</th>
                        <th>Törlés</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in filteredItems" :key="index">
                        <td>{{ item.col1 }}</td>
                        <td>{{ item.col2 }}</td>
                        <td>
                            <button class="view-button" @click="this.playVideo(item)">
                                Megtekintés
                            </button>
                        </td>
                        <td>
                            <button class="edit-button">
                                <SvgIcon type="mdi" :path="mdiPencil" class="icon" />
                            </button>
                        </td>
                        <td>
                            <button class="delete-button">
                                <SvgIcon type="mdi" :path="mdiDelete" class="icon" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <button class="create">Létrehozás</button>
    </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiPencil, mdiDelete } from "@mdi/js";

export default {
    components: {
        SvgIcon,
    },
    data() {
        return {
            isPlaying: false,
            mdiPencil,
            mdiDelete,
            searchQuery: '',
            items: [
                { col1: 'A1', col2: 'B1', col3: 'C1', col4: 'D1', col5: 'E1' },
                { col1: 'A2', col2: 'B2', col3: 'C2', col4: 'D2', col5: 'E2' },
                { col1: 'A3', col2: 'B3', col3: 'C3', col4: 'D3', col5: 'E3' },
                { col1: 'A4', col2: 'B4', col3: 'C4', col4: 'D4', col5: 'E4' },
                { col1: 'A5', col2: 'B5', col3: 'C5', col4: 'D5', col5: 'E5' },
                { col1: 'A1', col2: 'B1', col3: 'C1', col4: 'D1', col5: 'E1' },
                { col1: 'A2', col2: 'B2', col3: 'C2', col4: 'D2', col5: 'E2' },
                { col1: 'A3', col2: 'B3', col3: 'C3', col4: 'D3', col5: 'E3' },
                { col1: 'A4', col2: 'B4', col3: 'C4', col4: 'D4', col5: 'E4' },
                { col1: 'A5', col2: 'B5', col3: 'C5', col4: 'D5', col5: 'E5' },
                { col1: 'A1', col2: 'B1', col3: 'C1', col4: 'D1', col5: 'E1' },
                { col1: 'A2', col2: 'B2', col3: 'C2', col4: 'D2', col5: 'E2' },
                { col1: 'A3', col2: 'B3', col3: 'C3', col4: 'D3', col5: 'E3' },
                { col1: 'A4', col2: 'B4', col3: 'C4', col4: 'D4', col5: 'E4' },
                { col1: 'A5', col2: 'B5', col3: 'C5', col4: 'D5', col5: 'E5' },
                { col1: 'A1', col2: 'B1', col3: 'C1', col4: 'D1', col5: 'E1' },
                { col1: 'A2', col2: 'B2', col3: 'C2', col4: 'D2', col5: 'E2' },
                { col1: 'A3', col2: 'B3', col3: 'C3', col4: 'D3', col5: 'E3' },
                { col1: 'A4', col2: 'B4', col3: 'C4', col4: 'D4', col5: 'E4' },
                { col1: 'A5', col2: 'B5', col3: 'C5', col4: 'D5', col5: 'E5' },
                { col1: 'A1', col2: 'B1', col3: 'C1', col4: 'D1', col5: 'E1' },
                { col1: 'A2', col2: 'B2', col3: 'C2', col4: 'D2', col5: 'E2' },
                { col1: 'A3', col2: 'B3', col3: 'C3', col4: 'D3', col5: 'E3' },
                { col1: 'A4', col2: 'B4', col3: 'C4', col4: 'D4', col5: 'E4' },
                { col1: 'A5', col2: 'B5', col3: 'C5', col4: 'D5', col5: 'E5' },
                { col1: 'A1', col2: 'B1', col3: 'C1', col4: 'D1', col5: 'E1' },
                { col1: 'A2', col2: 'B2', col3: 'C2', col4: 'D2', col5: 'E2' },
                { col1: 'A3', col2: 'B3', col3: 'C3', col4: 'D3', col5: 'E3' },
                { col1: 'A4', col2: 'B4', col3: 'C4', col4: 'D4', col5: 'E4' },
                { col1: 'A5', col2: 'B5', col3: 'C5', col4: 'D5', col5: 'E5' },
                { col1: 'A1', col2: 'B1', col3: 'C1', col4: 'D1', col5: 'E1' },
                { col1: 'A2', col2: 'B2', col3: 'C2', col4: 'D2', col5: 'E2' },
                { col1: 'A3', col2: 'B3', col3: 'C3', col4: 'D3', col5: 'E3' },
                { col1: 'A4', col2: 'B4', col3: 'C4', col4: 'D4', col5: 'E4' },
                { col1: 'A5', col2: 'B5', col3: 'C5', col4: 'D5', col5: 'E5' },
                { col1: 'A1', col2: 'B1', col3: 'C1', col4: 'D1', col5: 'E1' },
                { col1: 'A2', col2: 'B2', col3: 'C2', col4: 'D2', col5: 'E2' },
                { col1: 'A3', col2: 'B3', col3: 'C3', col4: 'D3', col5: 'E3' },
                { col1: 'A4', col2: 'B4', col3: 'C4', col4: 'D4', col5: 'E4' },
                { col1: 'A5', col2: 'B5', col3: 'C5', col4: 'D5', col5: 'E5' },
                { col1: 'A1', col2: 'B1', col3: 'C1', col4: 'D1', col5: 'E1' },
                { col1: 'A2', col2: 'B2', col3: 'C2', col4: 'D2', col5: 'E2' },
                { col1: 'A3', col2: 'B3', col3: 'C3', col4: 'D3', col5: 'E3' },
                { col1: 'A4', col2: 'B4', col3: 'C4', col4: 'D4', col5: 'E4' },
                { col1: 'A5', col2: 'B5', col3: 'C5', col4: 'D5', col5: 'E5' },
            ]
        };
    },
    computed: {
        filteredItems() {
            if (this.searchQuery === '') {
                return this.items;
            } else {
                return this.items.filter(item => item.col1.toLowerCase().includes(this.searchQuery.toLowerCase()));
            }
        }
    },
    methods: {
        playVideo(item) {
            this.isPlaying = !this.isPlaying
        }
    }
};
</script>

<style scoped>
* {
    color: black;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.edit-button,
.delete-button {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
}

.view-button {
    font-family: 'Anta';
    color: white;
    font-size: 1.3rem;
    padding: 5px 15px;
    border-radius: 10px;
    background-color: #3883d9;
    transition: all 0.2s ease-in-out;
}

.edit-button {
    background-color: #FF00D0;
}

.delete-button {
    background-color: #B61431;
}

.view-button:hover,
.edit-button:hover,
.delete-button:hover {
    transform: scale(1.1);
    cursor: pointer;
}

.view-button:hover {
    background-color: #1c5b8a;
}

.edit-button:hover {
    background-color: #b40193;
}

.delete-button:hover {
    background-color: #9e0b26;
}

.icon {
    color: white;
    width: 30px;
    height: 30px;
    transition: all 0.2s ease-in-out;
}

.view-button:hover .icon,
.edit-button:hover .icon,
.delete-button:hover .icon {
    transform: scale(1.1);
}

.full-screen-container {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.search-container {
    margin-bottom: 20px;
}

.search-bar {
    font-family: 'Anta';
    background-color: white;
    width: 250px;
    padding: 10px;
    font-size: 1.3rem;
    text-align: center;
    border: none;
    border-bottom: 4px solid black;
}

.search-bar:focus {
    outline: none;
}

.create {
    font-family: 'Anta';
    color: white;
    margin-top: 3%;
    font-size: 2rem;
    padding: 10px 30px;
    border-radius: 10px;
    background-color: #3883d9;
}

.create:hover {
    background-color: #2a64a6;
    cursor: pointer;
}

.table-container {
    width: 100%;
    overflow-x: auto;
    scrollbar-width: none;
}

.table-container::-webkit-scrollbar {
    display: none;
}

.data-table th {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
    font-weight: bold;
}

.data-table thead {
    border-bottom: 4px solid black;
}

.data-table {
    width: 100%;
    border-collapse: collapse;
}

.data-table th,
.data-table td {
    padding: 12px;
    text-align: center;
    font-size: 1.3rem;
}

.data-table th {
    border-bottom: 4px solid black;
    font-weight: bold;
}
</style>