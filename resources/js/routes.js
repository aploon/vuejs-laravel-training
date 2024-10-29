import MainLayout from "./components/layouts/MainLayout.vue";
import Home from "./components/pages/Home.vue";
import Page1 from "./components/pages/Page1.vue";
import Page2 from "./components/pages/Page2.vue";

export const routes = [
    // Main routes
    { path: '/', component: MainLayout, children: [
        { path: '', name:'home', component: Home },
        { path: 'page1', name:'page1', component: Page1 },
        { path: 'page2', name:'page2', component: Page2 },
        { path: 'page2/:id', name:'page2_id', component: Page2 },
    ]},

    // 404
    // { path: '/:pathMatch(.*)*', component: NotFoundPage }
]