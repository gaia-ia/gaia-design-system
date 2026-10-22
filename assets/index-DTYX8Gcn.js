import{j as u}from"./jsx-runtime-DiklIkkE.js";import{r as c}from"./index-DRjF_FHU.js";import{c as d}from"./clsx-DegBVMCo.js";import{S as m}from"./index-C7sk0Hs-.js";const v="_button_1tgtd_1",p="_variantDefault_1tgtd_60",f="_variantOutline_1tgtd_73",_="_variantSecondary_1tgtd_86",g="_variantGhost_1tgtd_97",z="_variantDestructive_1tgtd_110",h="_variantLink_1tgtd_123",S="_sizeDefault_1tgtd_135",y="_sizeXs_1tgtd_141",I="_sizeSm_1tgtd_154",b="_sizeLg_1tgtd_167",x="_sizeIcon_1tgtd_173",D="_sizeIconXs_1tgtd_179",L="_sizeIconSm_1tgtd_191",k="_sizeIconLg_1tgtd_198",t={button:v,variantDefault:p,variantOutline:f,variantSecondary:_,variantGhost:g,variantDestructive:z,variantLink:h,sizeDefault:S,sizeXs:y,sizeSm:I,sizeLg:b,sizeIcon:x,sizeIconXs:D,sizeIconSm:L,sizeIconLg:k},C={default:t.variantDefault,outline:t.variantOutline,secondary:t.variantSecondary,ghost:t.variantGhost,destructive:t.variantDestructive,link:t.variantLink},B={default:t.sizeDefault,xs:t.sizeXs,sm:t.sizeSm,lg:t.sizeLg,icon:t.sizeIcon,"icon-xs":t.sizeIconXs,"icon-sm":t.sizeIconSm,"icon-lg":t.sizeIconLg},n=c.forwardRef(({className:s,variant:e="default",size:a="default",asChild:i=!1,...o},l)=>{const r=i?m:"button";return u.jsx(r,{ref:l,"data-slot":"button","data-variant":e,"data-size":a,className:d(t.button,C[e],B[a],s),...o})});n.displayName="Button";n.__docgenInfo={description:`A versatile button component with multiple visual variants and sizes.
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
