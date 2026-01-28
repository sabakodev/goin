import KidungIntroductionContent from "./content"

export default function KidungIntroduction() {
	const contents = [
		{
			label: "Video Introduksi Mengidung Oleh Romo Martinos (Under Construction)",
			href: "",
			remark: "YouTube • (12:01)",
		},
		{
			label: "Playlist Belajar Membaca Notasi Byzantine",
			href: "https://www.youtube.com/watch?v=F1i-7mWckCI&list=PLIE8AtU0tO8vdovtqAR5IaNhsML8IYHRa",
			remark: "Youtube Playlist • (24 video)",
		},
		{
			label: "Rekaman Latihan Bersama Online Bersama Romo Martinos",
			href: "https://www.youtube.com/@thetruthseeker6825",
			remark: "YouTube Channel • (Zoom recordings)",
		},
		{
			label: "Repo Video & Musik Rekaman oleh Anggota GOI (Under Construction)",
			href: "",
			remark: "Google Drive Folder",
		},
		{
			label: "Repo Video & Musik Rekaman oleh Anggota GOI (Under Construction)",
			href: "https://www.youtube.com/watch?v=i-3h9TQ312c&list=PL4R0RQw-MPauf_EjMeHTKu_ug_MZQ0uTO",
			remark: "YouTube Playlist",
		},
		{
			label: "Playlist Belajar Membaca Notasi Byzantine",
			href: "https://www.instagram.com/p/DTwS0b9kteO/",
			remark: "Instagram Post",
		},
	]
	return (
		<div className="mt-10 mb-8 mx-6 lg:mx-12">
			<h1 className="font-semibold text-secondary mb-4">Introduksi & Konten</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{
					contents.map((content, index) => (
						<KidungIntroductionContent key={index} title={content.label} remark={content.remark} index={index + 1} href={content.href} />
					))
				}
			</div>
		</div>
	)
}