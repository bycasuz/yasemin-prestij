import {
  Building2,
  Users,
  CalendarDays,
  TrendingUp,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stats = [
  {
    title: "Toplam İlan",
    value: "0",
    icon: Building2,
    description: "Kayıtlı gayrimenkuller",
  },
  {
    title: "Müşteri Talepleri",
    value: "0",
    icon: Users,
    description: "Gelen başvurular",
  },
  {
    title: "Randevular",
    value: "0",
    icon: CalendarDays,
    description: "Planlanan görüşmeler",
  },
  {
    title: "Portföy Performansı",
    value: "—",
    icon: TrendingUp,
    description: "Veri bağlantısı bekleniyor",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium text-slate-500">
            YASEMİN PRESTİJ GAYRİMENKUL
          </p>

          <h1 className="text-3xl font-bold tracking-tight">
            Yönetim Merkezi
          </h1>

          <p className="mt-2 text-slate-500">
            Hoş geldiniz. Gayrimenkul operasyonlarınızı
            buradan yöneteceksiniz.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>

                  <Icon className="h-5 w-5 text-slate-500" />
                </CardHeader>

                <CardContent>
                  <div className="text-3xl font-bold">
                    {stat.value}
                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 rounded-xl border bg-white p-8">
          <h2 className="text-xl font-semibold">
            Yasemin Prestij Yönetim Paneli
          </h2>

          <p className="mt-3 text-slate-500">
            Profesyonel dashboard altyapısı hazırlanıyor.
            İlan yönetimi, CRM, medya merkezi ve diğer
            modüller bu yapıya bağlanacak.
          </p>
        </div>
      </div>
    </main>
  );
}
