"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Toggle } from "@/components/ui/toggle"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Sun, Moon, Bold, Italic, Underline, AlertTriangle, CheckCircle2, Info,
  Mail, Bell, Search, Settings, User, ChevronRight, Copy, Check
} from "lucide-react"

function SectionHeading({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {description && <p className="text-muted-foreground mt-1">{description}</p>}
    </div>
  )
}

function ColorSwatch({ name, value, textLight }: { name: string; value: string; textLight?: boolean }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      className="group flex flex-col items-center gap-2 cursor-pointer"
      onClick={() => { navigator.clipboard?.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1500) }}
    >
      <div
        className={`w-full h-16 rounded-lg border shadow-sm flex items-center justify-center transition-transform group-hover:scale-105 ${textLight ? "text-white" : "text-black"}`}
        style={{ backgroundColor: value }}
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" />}
      </div>
      <span className="text-xs font-medium">{name}</span>
      <span className="text-[10px] text-muted-foreground font-mono">{value}</span>
    </button>
  )
}

export default function DesignSystemPage() {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <div>
                <h1 className="font-bold text-lg leading-tight">SOP Design System</h1>
                <p className="text-[11px] text-muted-foreground leading-tight">v0.1.0 · shadcn/ui · Tailwind v4</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={() => setDark(!dark)}>
                    {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Toggle {dark ? "light" : "dark"} mode</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">

          {/* ===== DESIGN TOKENS ===== */}
          <section>
            <SectionHeading title="Design Tokens" description="Core values that define the visual language" />

            <Tabs defaultValue="colors" className="w-full">
              <TabsList>
                <TabsTrigger value="colors">Colors</TabsTrigger>
                <TabsTrigger value="typography">Typography</TabsTrigger>
                <TabsTrigger value="spacing">Spacing</TabsTrigger>
                <TabsTrigger value="radius">Radius</TabsTrigger>
              </TabsList>

              <TabsContent value="colors" className="mt-6">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">Core</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                      <ColorSwatch name="Background" value="oklch(1 0 0)" />
                      <ColorSwatch name="Foreground" value="oklch(0.145 0 0)" textLight />
                      <ColorSwatch name="Primary" value="oklch(0.205 0 0)" textLight />
                      <ColorSwatch name="Primary FG" value="oklch(0.985 0 0)" />
                      <ColorSwatch name="Secondary" value="oklch(0.97 0 0)" />
                      <ColorSwatch name="Muted" value="oklch(0.97 0 0)" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">Semantic</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                      <ColorSwatch name="Accent" value="oklch(0.97 0 0)" />
                      <ColorSwatch name="Destructive" value="oklch(0.577 0.245 27.325)" textLight />
                      <ColorSwatch name="Border" value="oklch(0.922 0 0)" />
                      <ColorSwatch name="Input" value="oklch(0.922 0 0)" />
                      <ColorSwatch name="Ring" value="oklch(0.708 0 0)" />
                      <ColorSwatch name="Muted FG" value="oklch(0.556 0 0)" textLight />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">Chart</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                      <ColorSwatch name="Chart 1" value="oklch(0.646 0.222 41.116)" textLight />
                      <ColorSwatch name="Chart 2" value="oklch(0.6 0.118 184.704)" textLight />
                      <ColorSwatch name="Chart 3" value="oklch(0.398 0.07 227.392)" textLight />
                      <ColorSwatch name="Chart 4" value="oklch(0.828 0.189 84.429)" />
                      <ColorSwatch name="Chart 5" value="oklch(0.769 0.188 70.08)" />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="typography" className="mt-6">
                <div className="space-y-6">
                  {[
                    { label: "Display", className: "text-5xl font-bold", sample: "Aa" },
                    { label: "H1", className: "text-4xl font-bold", sample: "Heading 1" },
                    { label: "H2", className: "text-3xl font-semibold", sample: "Heading 2" },
                    { label: "H3", className: "text-2xl font-semibold", sample: "Heading 3" },
                    { label: "H4", className: "text-xl font-medium", sample: "Heading 4" },
                    { label: "Body Large", className: "text-lg", sample: "The quick brown fox jumps over the lazy dog." },
                    { label: "Body", className: "text-base", sample: "The quick brown fox jumps over the lazy dog." },
                    { label: "Body Small", className: "text-sm text-muted-foreground", sample: "The quick brown fox jumps over the lazy dog." },
                    { label: "Caption", className: "text-xs text-muted-foreground", sample: "Caption text · Labels · Metadata" },
                    { label: "Mono", className: "text-sm font-mono bg-muted px-3 py-2 rounded-md", sample: "const x = 42;" },
                  ].map((t) => (
                    <div key={t.label} className="flex items-baseline gap-6 border-b pb-4">
                      <span className="text-xs font-medium text-muted-foreground w-24 shrink-0">{t.label}</span>
                      <span className={t.className}>{t.sample}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="spacing" className="mt-6">
                <div className="space-y-3">
                  {[
                    { name: "px", size: "1px" }, { name: "0.5", size: "2px" }, { name: "1", size: "4px" },
                    { name: "2", size: "8px" }, { name: "3", size: "12px" }, { name: "4", size: "16px" },
                    { name: "5", size: "20px" }, { name: "6", size: "24px" }, { name: "8", size: "32px" },
                    { name: "10", size: "40px" }, { name: "12", size: "48px" }, { name: "16", size: "64px" },
                  ].map((s) => (
                    <div key={s.name} className="flex items-center gap-4">
                      <span className="text-xs font-mono text-muted-foreground w-16">{s.name}</span>
                      <div className="h-4 bg-primary/20 rounded" style={{ width: s.size }} />
                      <span className="text-xs text-muted-foreground">{s.size}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="radius" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {[
                    { name: "sm", class: "rounded-sm" },
                    { name: "md (default)", class: "rounded-md" },
                    { name: "lg", class: "rounded-lg" },
                    { name: "xl", class: "rounded-xl" },
                    { name: "2xl", class: "rounded-2xl" },
                    { name: "full", class: "rounded-full" },
                  ].map((r) => (
                    <div key={r.name} className="flex flex-col items-center gap-2">
                      <div className={`w-20 h-20 bg-primary/10 border-2 border-primary/30 ${r.class}`} />
                      <span className="text-xs font-medium">{r.name}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>

          <Separator />

          {/* ===== BUTTONS ===== */}
          <section>
            <SectionHeading title="Buttons" description="Actions and interactions" />
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon"><Settings className="h-4 w-4" /></Button>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground">With Icons</h3>
                <div className="flex flex-wrap gap-3">
                  <Button><Mail className="h-4 w-4" /> Send Email</Button>
                  <Button variant="outline"><Bell className="h-4 w-4" /> Notifications</Button>
                  <Button variant="secondary"><ChevronRight className="h-4 w-4" /> Next Step</Button>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground">States</h3>
                <div className="flex flex-wrap gap-3">
                  <Button disabled>Disabled</Button>
                  <Button variant="outline" disabled>Disabled Outline</Button>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* ===== CARDS ===== */}
          <section>
            <SectionHeading title="Cards" description="Content containers with flexible composition" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Card</CardTitle>
                  <CardDescription>A simple card with title and description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Cards group related content and actions. They provide visual boundaries and hierarchy.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Action</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">User Profile</CardTitle>
                      <CardDescription>@shadcn</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 text-sm">
                    <div><span className="font-semibold">1.2k</span> <span className="text-muted-foreground">followers</span></div>
                    <div><span className="font-semibold">340</span> <span className="text-muted-foreground">following</span></div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    Featured
                  </CardTitle>
                  <CardDescription>Highlighted card variation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Use subtle color accents to draw attention to specific cards without being overwhelming.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* ===== FORM CONTROLS ===== */}
          <section>
            <SectionHeading title="Form Controls" description="Inputs, selects, checkboxes, and more" />
            <div className="grid md:grid-cols-2 gap-8">
              {/* Inputs */}
              <Card>
                <CardHeader><CardTitle className="text-base">Inputs</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Default</Label>
                    <Input placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label>With Icon</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input className="pl-9" placeholder="Search..." />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Disabled</Label>
                    <Input disabled placeholder="Cannot edit" />
                  </div>
                  <div className="space-y-2">
                    <Label>Textarea</Label>
                    <Textarea placeholder="Write a message..." rows={3} />
                  </div>
                </CardContent>
              </Card>

              {/* Select & Checkbox */}
              <Card>
                <CardHeader><CardTitle className="text-base">Selection</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Select</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Pick a framework" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="remix">Remix</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="vite">Vite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <Label>Checkboxes</Label>
                    <div className="flex items-center gap-2">
                      <Checkbox id="c1" defaultChecked />
                      <label htmlFor="c1" className="text-sm">Enable notifications</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="c2" />
                      <label htmlFor="c2" className="text-sm">Subscribe to newsletter</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="c3" disabled />
                      <label htmlFor="c3" className="text-sm text-muted-foreground">Admin access (disabled)</label>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <Label>Switches</Label>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Airplane mode</span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Wi-Fi</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sliders & Toggles */}
              <Card>
                <CardHeader><CardTitle className="text-base">Sliders & Toggles</CardTitle></CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <Label>Volume</Label>
                      <span className="text-sm text-muted-foreground">75%</span>
                    </div>
                    <Slider defaultValue={[75]} max={100} step={1} />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <Label>Price range</Label>
                      <span className="text-sm text-muted-foreground">$20 – $80</span>
                    </div>
                    <Slider defaultValue={[20, 80]} max={100} step={1} />
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <Label>Toggle buttons</Label>
                    <div className="flex gap-2">
                      <Toggle aria-label="Bold"><Bold className="h-4 w-4" /></Toggle>
                      <Toggle aria-label="Italic"><Italic className="h-4 w-4" /></Toggle>
                      <Toggle aria-label="Underline"><Underline className="h-4 w-4" /></Toggle>
                    </div>
                    <div className="flex gap-2">
                      <Toggle variant="outline" aria-label="Bold"><Bold className="h-4 w-4" /></Toggle>
                      <Toggle variant="outline" aria-label="Italic"><Italic className="h-4 w-4" /></Toggle>
                      <Toggle variant="outline" aria-label="Underline"><Underline className="h-4 w-4" /></Toggle>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Form Example */}
              <Card>
                <CardHeader><CardTitle className="text-base">Form Example</CardTitle></CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first">First name</Label>
                        <Input id="first" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last">Last name</Label>
                        <Input id="last" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea id="bio" placeholder="Tell us about yourself" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="terms" />
                      <label htmlFor="terms" className="text-sm">I agree to the terms</label>
                    </div>
                    <Button type="submit" className="w-full">Submit</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* ===== BADGES & ALERTS ===== */}
          <section>
            <SectionHeading title="Badges & Alerts" description="Status indicators and notifications" />
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Badges</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Alerts</h3>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Info</AlertTitle>
                  <AlertDescription>This is an informational alert with default styling.</AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>Something went wrong. Please check your input and try again.</AlertDescription>
                </Alert>
                <Alert variant="success">
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>Your changes have been saved successfully.</AlertDescription>
                </Alert>
              </div>
            </div>
          </section>

          <Separator />

          {/* ===== PROGRESS & AVATARS ===== */}
          <section>
            <SectionHeading title="Progress & Avatars" description="Visual feedback and identity" />
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader><CardTitle className="text-base">Progress</CardTitle></CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm"><span>Uploading...</span><span className="text-muted-foreground">65%</span></div>
                    <Progress value={65} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm"><span>Almost done</span><span className="text-muted-foreground">90%</span></div>
                    <Progress value={90} indicatorClassName="bg-emerald-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm"><span>Low</span><span className="text-muted-foreground">25%</span></div>
                    <Progress value={25} indicatorClassName="bg-amber-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle className="text-base">Avatars</CardTitle></CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-xs text-muted-foreground mb-3">Sizes</p>
                    <div className="flex items-end gap-3">
                      <Avatar className="h-6 w-6"><AvatarFallback className="text-[10px]">XS</AvatarFallback></Avatar>
                      <Avatar className="h-8 w-8"><AvatarFallback className="text-xs">SM</AvatarFallback></Avatar>
                      <Avatar><AvatarFallback>MD</AvatarFallback></Avatar>
                      <Avatar className="h-12 w-12"><AvatarFallback>LG</AvatarFallback></Avatar>
                      <Avatar className="h-16 w-16"><AvatarFallback className="text-lg">XL</AvatarFallback></Avatar>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-3">With images</p>
                    <div className="flex gap-3">
                      <Avatar><AvatarImage src="https://github.com/shadcn.png" /><AvatarFallback>CN</AvatarFallback></Avatar>
                      <Avatar><AvatarImage src="https://github.com/leerob.png" /><AvatarFallback>LR</AvatarFallback></Avatar>
                      <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
                      <Avatar><AvatarFallback className="bg-emerald-100 text-emerald-700">CD</AvatarFallback></Avatar>
                      <Avatar><AvatarFallback className="bg-violet-100 text-violet-700">EF</AvatarFallback></Avatar>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* ===== ACCORDION & TABLE ===== */}
          <section>
            <SectionHeading title="Data Display" description="Accordions, tables, and structured content" />
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader><CardTitle className="text-base">Accordion</CardTitle></CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is a design system?</AccordionTrigger>
                      <AccordionContent>
                        A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Why use shadcn/ui?</AccordionTrigger>
                      <AccordionContent>
                        shadcn/ui provides beautifully designed components built with Radix UI and Tailwind CSS. You own the code — copy and customize freely.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How to customize?</AccordionTrigger>
                      <AccordionContent>
                        Edit the CSS variables in globals.css to change colors, spacing, and radius. Each component can be individually customized by modifying its source file.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle className="text-base">Table</CardTitle></CardHeader>
                <CardContent>
                  <Table>
                    <TableCaption>A list of components</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Component</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Version</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { name: "Button", status: "Stable", version: "1.0" },
                        { name: "Card", status: "Stable", version: "1.0" },
                        { name: "Dialog", status: "Beta", version: "0.9" },
                        { name: "Data Table", status: "Alpha", version: "0.5" },
                        { name: "Calendar", status: "Planned", version: "—" },
                      ].map((row) => (
                        <TableRow key={row.name}>
                          <TableCell className="font-medium">{row.name}</TableCell>
                          <TableCell>
                            <Badge variant={row.status === "Stable" ? "success" : row.status === "Beta" ? "warning" : "secondary"}>
                              {row.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right font-mono text-sm">{row.version}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* ===== ICONS ===== */}
          <section>
            <SectionHeading title="Icons" description="Lucide icon library — consistent 24×24 stroke icons" />
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-4">
                  {[
                    { Icon: Search, label: "Search" },
                    { Icon: Mail, label: "Mail" },
                    { Icon: Bell, label: "Bell" },
                    { Icon: Settings, label: "Settings" },
                    { Icon: User, label: "User" },
                    { Icon: Check, label: "Check" },
                    { Icon: Sun, label: "Sun" },
                    { Icon: Moon, label: "Moon" },
                    { Icon: Bold, label: "Bold" },
                    { Icon: Italic, label: "Italic" },
                    { Icon: AlertTriangle, label: "Alert" },
                    { Icon: CheckCircle2, label: "Success" },
                  ].map(({ Icon, label }) => (
                    <Tooltip key={label}>
                      <TooltipTrigger asChild>
                        <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-muted transition-colors cursor-default">
                          <Icon className="h-5 w-5" />
                          <span className="text-[10px] text-muted-foreground">{label}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>{label}</TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Footer */}
          <footer className="border-t pt-8 pb-12">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-[10px]">S</span>
                </div>
                <span>SOP Design System</span>
              </div>
              <div className="flex gap-6">
                <span>Built with Next.js 16</span>
                <span>shadcn/ui</span>
                <span>Tailwind CSS v4</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
