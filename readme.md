PROJE OLUŞTURMA KOMUTU
npx create-expo-app --template blank@~50.0.17

REACT NAVİGATİON
https://reactnavigation.org/docs/getting-started/
KOMUT => yarn add @react-navigation/native
KOMUT => npx expo install react-native-screens react-native-safe-area-context
KOMUT => yarn add @react-navigation/native-stack



UYGULAMA İÇİ API URLLERİ
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/users/1
https://jsonplaceholder.typicode.com/albums?userId=1

REPO
https://github.com/nurikon/rn-education

DERSTE İŞLENECEKLER
1- Boş bir liste sayfası oluşturulacak.
2- Data servisten getirilecek.
3- Data ekranda listelenecek.
4- CustomListItem komponenti yapılacak ve bununla listelecek.
5- Navigation kurulacak.
6- Navigation stack ile item detail sayfasına (ID ile) gidilecek.
7- Item detail servisiyle item içeriği getirilip gösterilecek.


ÖDEV
kullanıcı albümlerinin listelendiği bir sayfa oluştur
Kullanıcı profili sayfasında yer alan buton ile bu sayfaya route et.
route aşamasında kullanıcı id sini para metre oarak sayfaya aktar.
albümler sayfasında id parametresiyle albumler servisinden datayı çekip listele.
