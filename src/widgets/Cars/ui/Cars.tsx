import { Loader } from '@/shared/ui/Loader'
import type { TReducersList } from '@/shared/lib/store/types'
import { LoaderModuleStore } from '@/shared/components/LoaderModuleStore'
import { carsListReducer, useGetCarsQuery } from '@/entities/Car'
import { CarsListSort } from '@/features/CarsListSort'
import { CarsCatalog } from './CarsCatalog'
import { type ReactElement } from 'react'
import { css } from '@emotion/react'
import { UiFlex } from '@/shared/ui/UiFlex'

const reducers: TReducersList = {
    carsList: carsListReducer,
}
export const Cars = (): ReactElement => {
    const { data, isLoading, error } = useGetCarsQuery()

    if (error) {
        console.log(error)
        return (
            <UiFlex
                align={'center'}
                justify={'center'}
                css={css`
                    width: 100dvw;
                    height: 80dvh;
                `}
            >
                ошибка
            </UiFlex>
        )
    }
    if (isLoading || !data) {
        return <Loader />
    }
    if (data?.length === 0) {
        return (
            <UiFlex
                align={'center'}
                justify={'center'}
                css={css`
                    width: 100dvw;
                    height: 80dvh;
                `}
            >
                Машин нет
            </UiFlex>
        )
    }

    return (
        <section
            css={css`
                padding: 46px 40px 130px;
            `}
        >
            <LoaderModuleStore reducer={reducers} isRemove={false}>
                <CarsListSort />
                <CarsCatalog items={data} />
            </LoaderModuleStore>
        </section>
    )
}
