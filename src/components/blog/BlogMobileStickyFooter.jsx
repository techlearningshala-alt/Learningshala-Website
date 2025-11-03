import React from 'react'
import ContentDrawer from '../custom/shared/drawer/ContentDrawer'
import SecondaryButton from '../custom/shared/SecondaryButton'
import PrimaryButton from '../custom/shared/PrimaryButton'
import { Badge } from '../ui/badge'
import { Grip, UserRound } from 'lucide-react'

const BlogMobileStickyFooter = ({ screenSize, allCategories }) => {
  return (
    <>
    {screenSize && screenSize.width < 768 && ( 
 <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-gradient-to-t from-background via-background to-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-2xl z-40">
 <div className="flex justify-between items-center gap-4 px-4 py-4">
   
   <div className="w-1/2">
     <ContentDrawer
       trigger={<SecondaryButton title="Category" icon={<Grip />} iconPos="left" />}
       title="All Blog Categories"
       content={
         <ul>
           {allCategories.map((category) => (
             <li key={category.name} className="text-sm bg-gray-100 p-4 rounded-2xl transition-all font-bold text-foreground  hover:text-primary flex items-center gap-4 justify-between mb-2">
               <span className="line-clamp-1"> {category.name}</span>
               <Badge className="px-1.5 rounded-full bg-foreground/7 text-foreground">
                 {category.count}
               </Badge>
             </li>
           ))}
         </ul>
       }
     />
   </div>

   <div className="w-1/2">
     <PrimaryButton title="Talk to an Expert" icon={<UserRound />} iconPos="left" />
   </div>

 </div>
</div>
)}</>
  )
}

export default BlogMobileStickyFooter