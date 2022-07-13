<template>
    <div class="container">
        <div v-if="posts" class="row">
            <div v-for="post in posts" :key="post.id" class="col-md-4">
                <div class="card">
                    <div class="card-header">{{post.title}}</div>

                    <div class="card-body">
                        {{post.content}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                posts: []
            }
        },
        mounted() {
            axios.get("/api/posts")
                .then(res => res.json())
                .then(json => {
                    this.posts = json.posts;
                })
        }
    }
</script>
