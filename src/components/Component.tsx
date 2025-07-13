import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
          <CardContent className="p-8 md:p-12 space-y-12">
            {/* Fullstack Developer Section */}
            <section className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Desarrollador Fullstack @STB CAPS</h2>
                <span className="text-purple-200 text-lg">2022 - Actualidad</span>
              </div>

              <h3 className="text-xl text-purple-100 font-semibold">Desarrollo de un ERP web</h3>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-purple-500/30 text-white border-purple-400">
                  React
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/30 text-white border-purple-400">
                  Bootstrap
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/30 text-white border-purple-400">
                  JavaScript
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/30 text-white border-purple-400">
                  TypeScript
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/30 text-white border-purple-400">
                  PostgreSQL
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/30 text-white border-purple-400">
                  Git
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/30 text-white border-purple-400">
                  Python
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/30 text-white border-purple-400">
                  Django
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/30 text-white border-purple-400">
                  Azure
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/30 text-white border-purple-400">
                  Heroku
                </Badge>
              </div>

              <ul className="space-y-3 text-purple-100 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-purple-300 mt-1">•</span>
                  <span>
                    Acelere y mejore los procesos para el control de inventario, pedidos para clientes, sugerencias de
                    producto a fabricar, historial de pagos, dashboards con estadísticos y gráficos.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-300 mt-1">•</span>
                  <span>Cree un sistema de punto de venta que actualmente se utiliza en 3 tiendas en la CDMX.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-300 mt-1">•</span>
                  <span>
                    Añadí custom hooks, estado global con Context API, y comencé a migrar el proyecto de JavaScript a
                    TypeScript.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-300 mt-1">•</span>
                  <span>Integre responsive design y tema oscuro con Bootstrap.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-300 mt-1">•</span>
                  <span>
                    Desarrollo y mantenimiento de APIs RESTful utilizando Django para adaptarlas a requerimientos
                    cambiantes del negocio.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-300 mt-1">•</span>
                  <span>
                    Integré Azure Storage con Django para el envío y recuperación de archivos, y conecte un sistema WMS
                    con servicios web a través de Azure como punto intermedio.
                  </span>
                </li>
              </ul>
            </section>

            {/* Mobile App Development Section */}
            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Desarrollo de una aplicación móvil</h2>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-purple-500/30 text-white border-purple-400">
                  React Native
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/30 text-white border-purple-400">
                  TypeScript
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/30 text-white border-purple-400">
                  Nativewind
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/30 text-white border-purple-400">
                  Firebase
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/30 text-white border-purple-400">
                  Zustand
                </Badge>
              </div>

              <ul className="space-y-3 text-purple-100 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-purple-300 mt-1">•</span>
                  <span>
                    Desarrollo una aplicación de compras para clientes mayoristas a través de WhatsApp, con inicio de
                    sesión, carrito de compras, envío de notificaciones, visualización de productos, historial de
                    pedidos y descarga de pdf.
                  </span>
                </li>
              </ul>
            </section>

            {/* Company Website Section */}
            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Desarrollo del sitio web principal de la empresa
              </h2>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-purple-500/30 text-white border-purple-400">
                  React
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/30 text-white border-purple-400">
                  JavaScript
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/30 text-white border-purple-400">
                  Tailwind
                </Badge>
              </div>

              <ul className="space-y-3 text-purple-100 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-purple-300 mt-1">•</span>
                  <span>Diseño y desarrollo del sitio web principal de la empresa www.stbcaps.com</span>
                </li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
