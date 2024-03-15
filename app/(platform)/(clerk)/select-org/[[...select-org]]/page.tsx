import React from 'react' // Add import statement for 'React'
import { OrganizationList } from '@clerk/nextjs'

export default function CreateOrganizationPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  )
}
