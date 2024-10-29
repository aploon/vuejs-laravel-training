<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Page 2</div>

                    <div class="card-body">
                        This is page 2.
                    </div>

                    <!-- link with router -->
                     <RouterLink to="/">Go to home</RouterLink>
                     <RouterLink to="/page1">Go to Page 1</RouterLink>
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
