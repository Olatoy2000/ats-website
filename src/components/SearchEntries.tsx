import React from "react";
import { Pagination } from "@mantine/core";

function SearchEntries() {
	return (
		<div>
			<Pagination
				total={200}
				color='red'
				size='lg'
			/>
		</div>
	);
}
export default SearchEntries;
