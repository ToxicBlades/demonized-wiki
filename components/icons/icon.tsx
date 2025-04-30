import Image from 'next/image'
import { ImageProps } from 'next/image'
import { IconCategory, IconName } from '@/types/icon-types';

// Make sure 'default' is included in IconCategory
// If it's not in the generated type, we need to create a union type
type ExtendedIconCategory = IconCategory | 'default';

interface IconProps<C extends ExtendedIconCategory = 'default'> extends Omit<ImageProps, 'src' | 'alt'> {
  category?: C;
  name: C extends IconCategory ? IconName<C> : string;
  size?: number;
}

export const Icon = <C extends ExtendedIconCategory = 'default'>({
  name,
  category = 'default' as C,
  size = 24,
  ...props
}: IconProps<C>) => {
  // Determine the correct path based on category
  const iconPath = category === 'default'
    ? `/icons/${name}.png`
    : `/icons/${category}/${name}.png`;

  return (
    <Image
      src={iconPath || "/placeholder.svg"}
      width={size}
      height={size}
      alt={`${name} icon${category !== 'default' ? ` (${category})` : ''}`}
      {...props}
    />
  )
}