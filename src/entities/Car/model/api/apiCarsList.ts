import { baseApi } from '@/shared/api/baseApi'
import { type ICar } from '../types/car'

export const apiCarsList = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCars: build.query<ICar[], void>({
            query: () => ({
                url: `/api`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: `
                        query {
                          cars {
                            id
                            brand
                            model
                            color
                            model_year
                            img_src
                            price
                            description
                            availability
                          }
                        }
                      `,
                }),
            }),
            transformResponse: (response: any) => {
                return response.data.cars
            },
        }),
    }),
})
export const { useGetCarsQuery } = apiCarsList
