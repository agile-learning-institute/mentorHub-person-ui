<template>
	<v-container>
		<h1 class="text-left">People</h1>
		<div class="mb-5 mt-5 d-flex justify-space-between">
			<a :href="newPersonLink()" target="_blank">
				<v-btn size="large" variant="tonal" class="bg-grey-lighten-5">
					Add New Person
				</v-btn>
			</a>
			<a :href="adminLink()" target="_blank">
				<v-btn size="large" variant="tonal" class="bg-grey-lighten-5">
					Admin
				</v-btn>
			</a>
		</div>
		<v-table>
			<thead>
				<tr>
					<th class="text-left">Name</th>
					<th class="text-left">Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="person in people" :key="person.ID">
					<td class="text-left">{{ person.name }}</td>
					<td class="text-left">
						<v-btn :href="editPersonLink(person.ID)" target="_blank"
							>Edit</v-btn
						>
					</td>
				</tr>
			</tbody>
		</v-table>
	</v-container>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			people: [],
		};
	},
	mounted() {
		document.title = "People";
		this.getData(); // Call getData() when the component is mounted
		document.addEventListener("visibilitychange", this.handleVisibilityChange);
	},
	beforeDestroy() {
		document.removeEventListener(
			"visibilitychange",
			this.handleVisibilityChange
		);
	},
	methods: {
		handleVisibilityChange() {
			if (document.visibilityState === "visible") {
				this.getData();
			}
		},
		async getData() {
			const apiUrl = `/api/person/`;

			try {
				// create parameter to prevent cache on flat API calls
				const parms = { params: { _: new Date().getTime() } };
				const apiResponse = await axios.get(apiUrl, parms);
				this.people = apiResponse.data;
			} catch (error) {
				console.log("Error:", error);
				console.error("An error occurred:", error);
			}
		},
		newPersonLink() {
			return this.$router.resolve({ name: "AddPerson" }).href;
		},
		editPersonLink(id) {
			// Generate the link for EditPerson route
			return this.$router.resolve({ name: "EditPerson", params: { id: id } })
				.href;
		},
		adminLink() {
			// Generates link for Admin route
			return this.$router.resolve({ name: "Admin" }).href;
		},
	},
};
</script>

<style scoped>
tbody tr:nth-of-type(odd) {
	background-color: rgba(0, 0, 0, 0.05);
}
</style>
