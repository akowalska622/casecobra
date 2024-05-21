// Including this in comment enables dynamic class in tailwind (like this: `bg-${color.tw}`)
// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950
// bg-green-950 border-green-950
// aspect-[896/1831]

export const COLORS = [
  {
    label: 'Black',
    value: 'black',
    tw: 'zinc-900',
  },
  {
    label: 'Blue',
    value: 'blue',
    tw: 'blue-950',
  },
  {
    label: 'Rose',
    value: 'rose',
    tw: 'rose-950',
  },
  {
    label: 'Green',
    value: 'green',
    tw: 'green-950',
  },
] as const;
