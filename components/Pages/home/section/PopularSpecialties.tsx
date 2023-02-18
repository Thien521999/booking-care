// libs
import React from 'react'
// components
import { SliderCommon } from '@components'
// models
import { images } from '@models';

interface IPopularSpecialtiesProps {
    title: string;
    color: string;
    images: images[];
}

export const PopularSpecialties = ({title, images, color}:IPopularSpecialtiesProps ) => {
  return (
    <SliderCommon title={title} images={images} color={color} />
  )
}
