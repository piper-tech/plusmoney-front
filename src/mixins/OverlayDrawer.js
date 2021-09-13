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
			if (!this.mask) {
				this.animateDrawer(false)
				return
			}

			this.animateDrawer(true)
		},
	},
	methods: {
		watchDrawer(state) {
			this.mask = state
		},
		setMask() {
			this.mask = false
		},
		animateDrawer(state) {
			if (!state) {
				this.dialog = state

				setTimeout(() => {
					this.$router.go('-1')
				}, this.timing)
			} else {
				setTimeout(() => {
					this.dialog = state
				}, this.timing)
			}
		},
	},
}
