export default {
	data: () => ({
		dialog: false,
		mask: false,
		timing: 150,
	}),
	created() {
		this.mask = true
	},
	watch: {
		mask() {
			if (!this.mask) return this.animate(false)

			this.animate(true)
		},
	},
	methods: {
		watch(state) {
			this.mask = state
		},
		set() {
			this.mask = false
		},
		animate(state) {
			if (!state) {
				this.dialog = state

				setTimeout(() => {
					this.$router.go('-1')
				}, this.timing)

				return
			}

			setTimeout(() => {
				this.dialog = state
			}, this.timing)
		},
	},
}
