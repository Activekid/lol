<template>
	<div>
		<lheader></lheader>
		<router-view></router-view>
		<lfooter></lfooter>
	</div>	
</template>
<script>
	var lfooter = require('./lfooter.vue');
	var lheader = require('./lheader.vue');
	module.exports = {
		components:{
			lfooter:lfooter,
			lheader:lheader
		}
	}
</script>