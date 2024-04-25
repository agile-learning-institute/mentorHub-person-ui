
<template>

      <v-expansion-panel>
        <template v-slot:title>
          <button class="v-expansion-panel-title enum-title" type="button" aria-expanded="false" >
            {{ collectionName }}
          </button>
        </template>
        <template v-slot:text>
					<ul class="list-items">

						<div v-for="(values, propertyName) in properties" :key="propertyName" class=" wide">
							<li>

								<div class="left">
									<span class="bold">{{ propertyName }}</span>: {{ values }}
								</div>
							</li>
						</div>
					</ul>
        </template>
      </v-expansion-panel>

</template>



<script>

export default {
	props: {
		properties: {
			type: Object,
			required: true,
		},
		collectionName: {
			type: String,
			required: true,
		},
	},


	methods: {

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
.enum-title{
	padding: 0;
  font-size: 1.2rem;
}
.list-items {
	/* padding: .5rem; */
}
li {
	list-style-type: square;
}
</style>
./EnumDropdownItem.vue
