import{j as u}from"./jsx-runtime-CDt2p4po.js";import{r as c}from"./index-GiUgBvb1.js";import{c as m}from"./clsx-CNgb8Gju.js";import{S as f}from"./index-BojL7TVx.js";const d="_button_6foeq_1",v="_variantDefault_6foeq_58",p="_variantOutline_6foeq_69",_="_variantSecondary_6foeq_81",z="_variantGhost_6foeq_91",g="_variantDestructive_6foeq_102",h="_variantLink_6foeq_115",S="_sizeDefault_6foeq_127",y="_sizeXs_6foeq_133",q="_sizeSm_6foeq_146",I="_sizeLg_6foeq_159",b="_sizeIcon_6foeq_165",x="_sizeIconXs_6foeq_171",D="_sizeIconSm_6foeq_183",L="_sizeIconLg_6foeq_190",e={button:d,variantDefault:v,variantOutline:p,variantSecondary:_,variantGhost:z,variantDestructive:g,variantLink:h,sizeDefault:S,sizeXs:y,sizeSm:q,sizeLg:I,sizeIcon:b,sizeIconXs:x,sizeIconSm:D,sizeIconLg:L},k={default:e.variantDefault,outline:e.variantOutline,secondary:e.variantSecondary,ghost:e.variantGhost,destructive:e.variantDestructive,link:e.variantLink},C={default:e.sizeDefault,xs:e.sizeXs,sm:e.sizeSm,lg:e.sizeLg,icon:e.sizeIcon,"icon-xs":e.sizeIconXs,"icon-sm":e.sizeIconSm,"icon-lg":e.sizeIconLg},n=c.forwardRef(({className:s,variant:t="default",size:a="default",asChild:i=!1,...o},l)=>{const r=i?f:"button";return u.jsx(r,{ref:l,"data-slot":"button","data-variant":t,"data-size":a,className:m(e.button,k[t],C[a],s),...o})});n.displayName="Button";n.__docgenInfo={description:`A versatile button component with multiple visual variants and sizes.
Supports render delegation via the \`asChild\` prop using Radix UI's \`Slot\`.

@component
@param {ButtonProps} props - The button props.
@param {"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"} [props.variant="default"] - The visual style variant of the button.
@param {"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"} [props.size="default"] - The size of the button.
@param {boolean} [props.asChild=false] - When true, delegates rendering to the child element via Radix \`Slot\`.
@param {string} [props.className] - Additional CSS class names to apply.
@returns {React.ReactElement} The rendered button element.

@example
<Button variant="default" size="sm">
  Click me
</Button>

@example
<Button variant="outline" asChild>
  <a href="/link">Navigate</a>
</Button>`,methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"keyof typeof buttonVariantClasses",elements:[{name:"literal",value:"default"},{name:"literal",value:"outline"},{name:"literal",value:"secondary"},{name:"literal",value:"ghost"},{name:"literal",value:"destructive"},{name:"literal",value:"link"}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:"keyof typeof buttonSizeClasses",elements:[{name:"literal",value:"default"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"lg"},{name:"literal",value:"icon"},{name:"literal",value:'"icon-xs"'},{name:"literal",value:'"icon-sm"'},{name:"literal",value:'"icon-lg"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};export{n as B};
