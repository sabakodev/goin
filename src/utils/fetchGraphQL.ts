export async function fetchGraphQL<T = any>(
	query: string,
	variables?: { [key: string]: any },
	headers?: { [key: string]: string },
): Promise<T> {
	try {
		const body = JSON.stringify({
			query,
			variables: {
				...variables,
			},
		})

		const response = await fetch(
			`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/sbkxxgoin-graphql`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					...headers,
				},
				body,
				next: {
					tags: ["wordpress"],
				},
			},
		)

		if (!response.ok) {
			console.error("Response Status:", response)
			throw new Error(response.statusText)
		}

		const data = await response.json()

		if (data.errors) {
			console.error("GraphQL Errors:", data.errors)
			throw new Error("Error executing GraphQL query")
		}

		return data.data
	} catch (error) {
		console.error(error)
		throw error
	}
}