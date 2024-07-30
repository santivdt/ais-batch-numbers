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

const InfoCard = ({ batch }: { batch: Batch | null }) => {
  return (
    <>
      {batch && (
        <Card className='mt-8 w-[500px]'>
          <CardHeader>
            <CardTitle>{batch.product}</CardTitle>
            <CardDescription>
              {batch.fishery} - {batch.number}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li>
                <span className='font-bold'>Product:</span> {batch.product}
              </li>
              <li>
                <span className='font-bold'>Product source:</span>{' '}
                {batch.product_source}
              </li>
              <li>
                <span className='font-bold'>FAO Area:</span> {batch.FAO_Area}
              </li>
              <li>
                <span className='font-bold'>Location:</span> {batch.location}
              </li>
              <li>
                <span className='font-bold'>Fishery Information:</span>{' '}
                {batch.fishery_information}
              </li>
              <li>
                <span className='font-bold'>Ingredients:</span>{' '}
                {batch.ingredients}
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant='outline'>
              <a href={batch.url} target='_blank'>
                More about {batch.fishery}
              </a>
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

export default InfoCard
