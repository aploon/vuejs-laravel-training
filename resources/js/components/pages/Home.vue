<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Home</div>

                    <div class="card-body">
                        This is Home.
                    </div>

                    <!-- link with router -->
                     <RouterLink to="/page1">Go to page 1</RouterLink>
                     <RouterLink to="/page2">Go to Page 2</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
        mounted() {
        }
    }
</script>
