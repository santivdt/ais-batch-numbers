export type Batch = {
  number: string
  fishery: string
  url: string
  product?: string
  product_source?: string
  FAO_Area?: string
  location?: string
  fishery_information?: string
  ingredients?: string
}

export const batches: Batch[] = [
  {
    number: '504132',
    product: 'Candied Wild Pink Salmon',
    product_source: 'Wild Pink Salmon',
    FAO_Area: '67 – Pacific Ocean',
    location:
      'Harrison River and adjacent Lower Fraser River, British Columbia – CANADA',
    fishery_information:
      'Fisherman from members of Sts’ailes and Scowlitz for the Harrison Salmon Producers / River Select Fisheries Cooperative',
    ingredients:
      'wild pink salmon (Oncorhynchus gorbuscha) , sugar, salt, natural alder wood smoke. May contain traces of gluten or soy.',
    fishery: 'Harrisson Select',
    url: 'https://authenticindigenousseafood.ca/fisheries/harrison-select/',
  },
  {
    number: '1212',
    fishery: 'Coast Tsimshian Seafood',
    url: 'https://authenticindigenousseafood.ca/fisheries/coast-tsimshian-seafood/',
  },
  {
    number: '2223',
    fishery: 'Chilko Select',
    url: 'https://authenticindigenousseafood.ca/fisheries/chilko-select/',
  },
  {
    number: '4321',
    fishery: 'Chilko Select',
    url: 'https://authenticindigenousseafood.ca/fisheries/chilko-select/',
  },
  {
    number: '5',
    fishery: 'Chilko select',
    url: 'https://authenticindigenousseafood.ca/fisheries/chilko-select/',
  },
]
