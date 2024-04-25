<template>
	<div>
		<ul>
			<v-expansion-panels>
				<div
					v-for="(properties, collectionName) in config.enums"
					:key="collectionName"
					class="wide"
				>
					<EnumDropdownItem
						v-if="shouldBeDisplayed(collectionName)"
						:collectionName="collectionName"
						:properties="properties"
					/>
				</div>
			</v-expansion-panels>
		</ul>
	</div>
</template>

<script>
import { mapState } from "vuex";
import EnumDropdownItem from "./EnumDropdownItem.vue";

export default {
	components: {
		EnumDropdownItem,
	},
	computed: {
		...mapState(["config"]),
	},
	methods: {
		shouldBeDisplayed(name) {
			return name !== "_id";
		},
	},
};
</script>

<style scoped>
.wide {
	width: 100%;
}

.left {
	text-align: left;
}

.bold {
	font-weight: bold;
}

.box {
	margin: 5px;
	/* padding: 10px; */
	border: 1px solid #ccc;
	border-radius: 1px;
}
</style>
./EnumDropdownItem.vue
