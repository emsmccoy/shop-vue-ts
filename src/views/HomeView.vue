<template>
	<div class="home">
		<div class="row">
			<div class="col-lg-6">
				<div class="img-cont">
					<img alt="logo" src="../assets/duck.png" />
					<h2 class="text-center text-lg-start">
            Quack-a-pop
					</h2>
				</div>
			</div>
			<div class="col-lg-6">
				<custom-card :btns="btnArray" class="mx-auto custom-card">
					<form>
						<div class="mb-3 mt-2">
							<input
								type="email"
								class="form-control"
								placeholder="E-mail"/>
						</div>
						<div class="mb-3 mt-2">
							<input
								type="password"
								class="form-control"
								placeholder="Password" />
						</div>
					</form>
				</custom-card>
			</div>
		</div>
	</div>
</template>


<script lang="ts">
	// @ is an alias to /src
	import LoginCard from '../components/LoginCard.vue'
	export default {
		name: 'HomeView',
		components: {
			LoginCard,
		},
		data() {
			return {
				btnArray: [
					{
						txt: 'Login',
						class: 'btn-secondary',
					}
				],
			}
		},
	}
</script>

<style scoped>
	.home {
		max-width: 895px;
		margin: auto;
	}
	.img-cont {
		display: flex;
		flex-direction: column;
	}
	img {
		max-width: 315px;
		margin: 1em auto 0 auto;
	}
	.custom-card {
		max-width: 398px;
		margin-top: 2.6em;
	}
  h2 {
    color: #545454;
  }
	@media (min-width: 992px) {
		.home {
			margin: 4em auto;
		}
		img {
			margin: 1em;
			margin-top: 1.6em;
		}
    .custom-card {
      margin: 0;
			margin-top: 6.8em;
    }
		h2 {
      color: #545454;
			margin: 0;
			margin-top: 0.8em;
			margin-left: 0.8em;
		}
	}
</style>