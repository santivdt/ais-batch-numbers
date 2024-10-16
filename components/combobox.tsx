'use client'

import { ChevronsUpDown } from 'lucide-react'
import { Batch, batches } from '@/lib/batch'
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
import { useState } from 'react'
import InfoCard from './info-card'

export function Combobox() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [currentItem, setCurrentItem] = useState<Batch | null>(null)

  const filteredBatches = batches.filter((batch) =>
    batch.batch_number.includes(inputValue)
  )

  const handleClick = (batch: Batch) => {
    console.log('clicked')
    setValue(batch.batch_number)
    setCurrentItem(batch)
    setOpen(false)
  }

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            role='combobox'
            aria-expanded={open}
            className='w-[500px] justify-between'
          >
            {value
              ? batches.find((batch) => batch.batch_number === value)
                  ?.batch_number
              : 'Type your batch number...'}
            <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[500px] p-0'>
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

      <InfoCard batch={currentItem} />
    </>
  )
}

export default Combobox
