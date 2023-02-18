import React from 'react'
import { SliderCommon } from '@components'
import { images } from '@models';

interface IHealthFacilitiesProps {
    title: string;
    color: string;
    images: images[];
}

export const HealthFacilities = ({title, images, color}:IHealthFacilitiesProps ) => {
  return (
    <SliderCommon title={title} images={images} color={color} />
  )
}
