<template>
	<li class="box">
		<v-expansion-panel>
			<v-expansion-panel-title
				><h2>{{ collectionName }}</h2></v-expansion-panel-title
			>
			<v-expansion-panel-text>
				<ul>
					<v-expansion-panels>
						<template v-for="(values, propertyName, index) in properties">
							<template v-if="isObject(values)">
								<!-- Recursively call EnumDropdownItem for objects -->
								<EnumDropdownItem
									:properties="values"
									:collectionName="propertyName"
									:key="index"
									class="wide"
								/>
							</template>
							<template v-else-if="typeof values === 'string'">
								<!-- Handle strings differently -->
								<ul :key="index" class="box wide border-0">
									<li class="  left ml-12">
										<div class="">
											<span class="bold">{{ propertyName }}</span
											>: {{ values }}
										</div>
									</li>
								</ul>
							</template>
						</template>
					</v-expansion-panels>
				</ul>
			</v-expansion-panel-text>
		</v-expansion-panel>
	</li>
</template>

<script>
import EnumDropdownItem from "./EnumDropdownItem.vue";

export default {
	props: {
		properties: {
			type: Object || String,
			required: true,
		},
		collectionName: {
			type: String,
			required: true,
		},
	},
	components: {
		EnumDropdownItem,
	},

	methods: {
		shouldBeDisplayed(name) {
			return name !== "_id" && name !== "name" && name !== "status";
		},
		isObject(value) {
			return (
				typeof value === "object" && value !== null && !Array.isArray(value)
			);
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
