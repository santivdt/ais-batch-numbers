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

export function Combobox() {
  const [open, setOpen] = useState(false)
  const [showFaq, setShowFaq] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [currentItem, setCurrentItem] = useState<Batch | null>(null)

  const filteredBatches = batches.filter((batch) =>
    batch.batch_number.includes(inputValue)
  )

  useEffect(() => {
    setInputValue(batches[0].batch_number)
    setCurrentItem(batches[0])
  }, [])

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
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              role='combobox'
              aria-expanded={open}
              className='justify-between'
            >
              <span className='text-rose-600 font-bold flex items-center gap-2'>
                <Search className='w-4 h-4 text-black' />
                {inputValue
                  ? batches.find((batch) => batch.batch_number === inputValue)
                      ?.batch_number
                  : ' Search batch number...'}
              </span>
              <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='p-0'>
            <Command>
              <CommandInput
                placeholder='Search batch number...'
                value={inputValue}
                onValueChange={setInputValue}
              />
              <CommandEmpty>No batch found.</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  {filteredBatches.map((batch) => (
                    <CommandItem
                      key={batch.batch_number}
                      value={batch.batch_number}
                      onSelect={() => handleClick(batch)}
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
        <h2
          className='text-yellow-400 font-bold text-lg cursor-pointer'
          onClick={() => setShowFaq(!showFaq)}
        >
          Where is my batch number located?
        </h2>
        {showFaq && (
          <p className='text-white'>
            Look for the batch number next to the best before date on the back
            of your product.
          </p>
        )}
      </div>
      <div className='flex-1'>
        <InfoCard batch={currentItem} />
      </div>
    </div>
  )
}

export default Combobox
