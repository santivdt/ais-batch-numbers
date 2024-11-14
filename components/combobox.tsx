'use client'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Batch, batches } from '@/lib/batch'
import { ChevronsUpDown, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import InfoCard from './info-card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Image from 'next/image'

export function Combobox() {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [currentItem, setCurrentItem] = useState<Batch | null>(null)

  const filteredBatches = batches.filter((batch) =>
    batch.batch_number.includes(inputValue)
  )

  // useEffect(() => {
  //   setInputValue(batches[0].batch_number)
  //   setCurrentItem(batches[0])
  // }, [])

  const handleClick = (batch: Batch) => {
    setInputValue(batch.batch_number)
    setCurrentItem(batch)
    setOpen(false)
  }

  return (
    <div className='flex gap-8 flex-col md:flex-row'>
      <div className='flex flex-col gap-4 flex-1'>
        <p className='text-white font-bold text-2xl'>
          Type your batch # and find out where your fish was caught:
        </p>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild onMouseDown={(e) => e.preventDefault()}>
            <Button
              variant='outline'
              role='combobox'
              aria-expanded={open}
              className='justify-between text-xl'
              onFocus={(e) => e.preventDefault()}
              onClick={(e) => e.preventDefault()}
            >
              <span className='text-rose-600 flex items-center gap-2'>
                <Search className='w-4 h-4 text-black' />
                {inputValue
                  ? batches.find((batch) => batch.batch_number === inputValue)
                      ?.batch_number
                  : ' Search batch number...'}
              </span>
              <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='p-0 w-[--radix-popover-trigger-width]'>
            <Command>
              <CommandInput
                placeholder='Search batch number...'
                value={inputValue}
                onValueChange={setInputValue}
                className='text-lg'
              />
              <CommandEmpty>No batch found.</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  {filteredBatches.map((batch) => (
                    <CommandItem
                      key={batch.batch_number}
                      value={batch.batch_number}
                      onSelect={() => handleClick(batch)}
                      className='text-md'
                    >
                      {batch.batch_number} - {batch.product} -{' '}
                      {batch.fishery_name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {currentItem && currentItem.img && (
          <Image
            src={currentItem.img}
            alt={currentItem.product!}
            width={300}
            height={300}
            className='mx-auto mt-4'
          />
        )}
        {!currentItem && (
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger className='text-yellow-400 font-bold text-lg'>
                Where is my batch number located?
              </AccordionTrigger>
              <AccordionContent className='text-white text-lg'>
                Look for the batch number next to the best before date on the
                back of your product.
                <Image
                  src='/batch-number.png'
                  alt='batch number'
                  width={300}
                  height={300}
                  className='mt-4'
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>
      <div className='flex-1'>
        <InfoCard batch={currentItem} />
      </div>
    </div>
  )
}

export default Combobox
