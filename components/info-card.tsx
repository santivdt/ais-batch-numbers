'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Batch } from '@/lib/batch'
import { Button } from './ui/button'
import Link from 'next/link'

const InfoCard = ({ batch }: { batch: Batch | null }) => {
  return (
    <>
      <Card className='max-w-[500px] bg-emerald-900 text-white border-white border-2 relative py-4'>
        <h2 className='text-emerald-900 text-center text-3xl font-bold -mt-10 tracking-wide'>
          BATCH #{batch ? batch.batch_number : 'XXXXXX'}
        </h2>
        {/* <CardHeader>
          <CardTitle>{batch ? batch.product : ''}</CardTitle>
          <CardDescription className='text-white'>
            {batch ? batch.fishery_name : ''} -{' '}
            {batch ? batch.batch_number : ''}
          </CardDescription>
        </CardHeader> */}
        <CardContent className='pt-6'>
          <ul>
            <li className='mb-2'>
              <span className=''>Product:</span>{' '}
              <span className='!font-normal'>{batch ? batch.product : ''}</span>
            </li>
            <li className='mb-2'>
              <span className='font-bold'>Fishery:</span>{' '}
              {batch && batch.url ? (
                <a href={batch.url} target='_blank' className='underline'>
                  {batch.fishery_name}
                </a>
              ) : batch ? (
                batch.fishery_name
              ) : (
                ''
              )}
            </li>
            <li className='mb-2'>
              <span className='font-bold'>Product source:</span>{' '}
              {batch ? batch.product_source : ''}
            </li>
            <li className='mb-2'>
              <span className='font-bold'>FAO Area:</span>{' '}
              {batch ? batch.FAO_Area : ''}
            </li>
            <li className='mb-2'>
              <span className='font-bold'>Location:</span>{' '}
              {batch ? batch.location : ''}
            </li>
            <li className='mb-2'>
              <span className='font-bold'>Ingredients:</span>{' '}
              {batch ? batch.ingredients_en : ''}
            </li>
            <li className='mb-2'>
              <span className='font-bold'>Ingrédients</span>{' '}
              {batch ? batch.ingredients_fr : ''}
            </li>
            <li className='mb-2'>
              <span className='font-bold'>Best before date:</span>{' '}
              {batch ? batch.best_before_date : ''}
            </li>
            <li className='mb-2'>
              <span className='font-bold'>Lot number:</span>{' '}
              {batch ? batch.lot_number : ''}
            </li>
            <li className='mb-2'>
              <span className='font-bold'>Harvest method:</span>{' '}
              {batch ? batch.harvest_method : ''}
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          {batch && batch.url && (
            <Button
              variant='outline'
              className='bg-amber-500 border-amber-500 font-bold hover:bg-amber-600 hover:border-amber-600 hover:text-white'
            >
              <a href={batch.url} target='_blank'>
                More about {batch.fishery_name}
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </>
  )
}

export default InfoCard
