import { ButtonLink } from "@/components/global/button"

export default function BannerKidungan() {
	return (
		<div className="flex flex-col lg:flex-row justify-between mx-6 mx-12 xl:mx-24 items-center mt-8 mb-4">
			<div className="space-y-2 lg:space-y-0 mb-4 lg:mb-0 text-md sm:text-base lg:flex opacity-40 font-medium">
				<p className="max-w-xs">Website arsip standarisasi kidung GOI, sesuai mandat Ym. Romo. Episkop. Daniel Bambang Byantoro kepada Departemen Musik Gerejawi GOI.</p>
				<p className="max-w-xs">Website disponsori dan diurus langsung oleh anggota GOIN untuk GOI, dibawah pengawasan dan arahan Rm Prb. Yakobus dan Rm Prb. Martinos.</p>
			</div>
			<div>
				<ButtonLink href="https://chat.whatsapp.com/EujitYm7DXCKXkqTNgF2dM" external={true} theme="hollow"><i>Join</i> WAG Pengidung</ButtonLink>
			</div>
		</div>
	)
}