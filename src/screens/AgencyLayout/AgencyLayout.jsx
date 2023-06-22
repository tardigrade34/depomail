import React from "react";
import { Content } from "../../components/Content";
import { DivWrapper } from "../../components/DivWrapper";
import { Element } from "../../components/Element";
import { Facebook } from "../../components/Facebook";
import { Feature } from "../../components/Feature";
import { IconImg } from "../../components/IconImg";
import { IconImg3 } from "../../components/IconImg3";
import { IconImgWrapper } from "../../components/IconImgWrapper";
import { Link } from "../../components/Link";
import { LogoAgencyWhite } from "../../components/LogoAgencyWhite";
import { Service } from "../../components/Service";
import { Spacer } from "../../components/Spacer";
import { Youtube } from "../../components/Youtube";
import "./style.css";

export const AgencyLayout = () => {
  return (
    <div className="agency-layout">
      <div className="navigation">
        <div className="navigation-2">
          <div className="menu-bar">
            <a className="text-wrapper-2" href="https://www.kartelam.com" rel="noopener noreferrer" target="_blank">
              Anasayfa
            </a>
            <a
              className="text-wrapper-3"
              href="https://kartelam.com/tr/#footer"
              rel="noopener noreferrer"
              target="_blank"
            >
              İletişim
            </a>
          </div>
          <div
            className="logo-agency-purple"
            style={{
              backgroundImage:
                "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/logo-agency-purple@2x.png)",
            }}
          />
        </div>
      </div>
      <Spacer
        style={{
          backgroundColor: "#46b1c9",
          minWidth: "600px",
          position: "relative",
          width: "unset",
        }}
      />
      <Spacer
        style={{
          backgroundColor: "#46b1c9",
          height: "10px",
          minWidth: "600px",
          position: "relative",
          width: "unset",
        }}
      />
      <Element
        overlapGroupStyle={{
          width: "600px",
        }}
        style={{
          minWidth: "600px",
          width: "unset",
        }}
      />
      <div
        className="rectangle-wrapper"
        style={{
          backgroundImage:
            "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/1-49.png)",
        }}
      >
        <div className="rectangle-2" />
      </div>
      <Content
        ourPortfolioStyle={{
          color: "#eb682d",
          fontSize: "14px",
          lineHeight: "24px",
        }}
        style={{
          height: "152px",
          minWidth: "600px",
          position: "relative",
          width: "unset",
        }}
        text="Kartelam’ın QR destekli depo yönetim sistemi ve diğer bir çok özelliğiyle işlerinizi hızlandırarak daha verimli hale getireceksiniz."
        text1="Size Ne Katacak?"
        text2="Kartelam Deneyimi"
      />
      <div className="services-wrapper">
        <div className="services">
          <div className="column-5">
            <div className="overlap-group-4">
              <p className="lorem-ipsum-is-2">
                <br />
                Müşterileriniz Kartelam ile konforlu bir sipariş deneyimi yaşarken hızınıza şaşıracaklar!
              </p>
              <div className="marketing">
                Müşteri
                <br />
                Memnuniyeti
              </div>
            </div>
            <IconImg
              style={{
                left: "55px",
                position: "absolute",
                top: "0",
              }}
            />
          </div>
          <div className="column-6">
            <div className="overlap-3">
              <p className="lorem-ipsum-is-3">
                <br />
                Depoya giriş-çıkış işlemleri tek tıkla hallolur. Ne siz ne de müşterileriniz bekler!
              </p>
              <div className="data">
                Zaman
                <br />
                Tasarrufu
              </div>
            </div>
            <IconImgWrapper
              style={{
                backgroundImage:
                  "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/icon-img-13@2x.png)",
                left: "55px",
                position: "absolute",
                top: "0",
              }}
            />
          </div>
          <div className="column-7">
            <div className="overlap-4">
              <p className="lorem-ipsum-is-4">
                <br />
                Daha az fire, daha düzenli depo, daha isabetli siparişler ve daha az maliyet!
              </p>
              <div className="research">
                Maliyet
                <br />
                Tasarrufu
              </div>
            </div>
            <DivWrapper
              style={{
                backgroundImage:
                  "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/icon-13@2x.png)",
                left: "55px",
                position: "absolute",
                top: "0",
              }}
            />
          </div>
        </div>
      </div>
      <Feature
        href="https://kartelam.com/tr/#keyFeatures"
        ourVisionStyle={{
          color: "#eb682d",
        }}
        roundedButtonMGetStartedStyle={{
          textDecoration: "underline",
        }}
        roundedButtonMRoundedButtonMStyle={{
          backgroundColor: "#eb682d",
          left: "5px",
          padding: "12px 36px",
          position: "absolute",
          top: "201px",
        }}
        roundedButtonMText="DETAYLAR"
        style={{
          minWidth: "600px",
          position: "relative",
          width: "unset",
        }}
        text="Yapay zeka destekli hizmetler"
        text1="Seçimleri kolaylaştıran arayüz"
        text2="Dijital Dönüşüm Danışmanlığı"
        text3={
          <>
            Teknoloji ilerliyor.
            <br />
            Peki ya siz?
          </>
        }
        text4="Vizyonumuz"
      />
      <Spacer
        style={{
          minWidth: "600px",
          position: "relative",
          width: "unset",
        }}
      />
      <Spacer
        style={{
          height: "10px",
          minWidth: "600px",
          position: "relative",
          width: "unset",
        }}
      />
      <div className="other-module-wrapper">
        <div
          className="other-modules-wrapper"
          style={{
            backgroundImage:
              "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/cta-bg-22-1.png)",
          }}
        >
          <div className="other-modules">
            <div
              className="client-img"
              style={{
                backgroundImage:
                  "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/youtube-logo-white@2x.png)",
              }}
            />
            <div
              className="client-img-2"
              style={{
                backgroundImage:
                  "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/webflow-logo-white@2x.png)",
              }}
            />
            <div
              className="client-img-3"
              style={{
                backgroundImage:
                  "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/facebook-logo-white@2x.png)",
              }}
            />
          </div>
        </div>
      </div>
      <Spacer
        style={{
          minWidth: "600px",
          position: "relative",
          width: "unset",
        }}
      />
      <Spacer
        style={{
          height: "10px",
          minWidth: "600px",
          position: "relative",
          width: "unset",
        }}
      />
      <Content
        ourPortfolioStyle={{
          color: "#eb682d",
        }}
        style={{
          height: "152px",
          minWidth: "600px",
          position: "relative",
          width: "unset",
        }}
        text="Kartelam hiç durmadan gelişen ve yenilenen özellikleriyle, en güncel teknolojileri sizlerin ve müşterilerinizin ayağına getiriyor."
        text1="Başka Neler Sunuyoruz?"
        text2="Diğer Hizmetlerimiz"
      />
      <Service
        href="https://kartelam.com/tr/search?image=633577e30ebd63e5b2c541fdfb02717f9025a12e6140b21b29718360363a4e81f987e674c92f77c6187b573524e5d2e31494c41763339b2d0dce7e38dbc4140fc525e3a90a65d0a8e6c8ecfeccbc40a98aa3d8321b9d9fc30c22b81d9e5f1c60c2c7165eecda11b39085bf06af8f8a3ea464b83a531cb7f6b7a74f4958351ef28cca01d6cdff6722e3860d997c5c4611b38751f0c4ce101b75ab895171f705147113ac02b607edadccf275e1d8ff4d27444e2f334328342f8f9f62a8262964ac8702c8cb8654ca96547056976a229ffcf9adaba98d46c90252397e11f5a44e70b9135555f32ee6d19094411cfcfe8f9527c317b22f6c79199a60b056adc7f2b5cab8c25cf43ad7e367cfdd21a7557cff0b8a9823f6175495800f2f333784455a4cb9edfa3ad3313eba8f07368f5fefc2b2d9c9fa7848cef42883a90cd96fabfe77c7a781d67c739c4952b605174c98f56b6b48f0eb00bba6ccf8303836a643247816d7c883c55eda3a9ba726a7d55229df21f1afae1aa75f1c53e38afc4e72b92ab4549c0e46d84dbe86"
        href1="https://www.youtube.com/watch?v=jVYjV5G5eG0"
        href2="https://fabrics.karincatekstil.com/tr/search?q="
        href3="https://www.youtube.com/watch?v=jVYjV5G5eG0"
        iconImg12IconImgStyle={{
          backgroundImage:
            "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/icon-16@2x.png)",
          left: "30px",
          position: "absolute",
          top: "30px",
        }}
        linkArrowLArrow="https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/arrow-3.svg"
        linkArrowLArrow1="https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/arrow-3.svg"
        linkArrowLArrow2="https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/arrow-3.svg"
        linkArrowLButtonTextStyle={{
          marginBottom: "-0.50px",
          marginTop: "-0.50px",
          minWidth: "73px",
        }}
        linkArrowLButtonTextStyleOverride={{
          marginBottom: "-0.50px",
          marginTop: "-0.50px",
          minWidth: "73px",
        }}
        linkArrowLDivStyle={{
          height: "25px",
          left: "38px",
          position: "absolute",
          top: "181px",
        }}
        linkArrowLDivStyleOverride={{
          textDecoration: "underline",
        }}
        linkArrowLExploreFeaturesStyle={{
          textDecoration: "underline",
        }}
        linkArrowLExploreFeaturesStyle1={{
          textDecoration: "underline",
        }}
        linkArrowLExploreFeaturesStyleOverride={{
          textDecoration: "underline",
        }}
        linkArrowLExploreFeaturesWrapperStyle={{
          marginBottom: "-0.50px",
          marginTop: "-0.50px",
          minWidth: "73px",
        }}
        linkArrowLExploreFeaturesWrapperStyleOverride={{
          marginBottom: "-0.50px",
          marginTop: "-0.50px",
          minWidth: "73px",
        }}
        linkArrowLImg="https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/arrow-3.svg"
        linkArrowLLinkArrowLStyle={{
          height: "25px",
          left: "38px",
          position: "absolute",
          top: "181px",
        }}
        linkArrowLLinkArrowLStyle1={{
          height: "25px",
          left: "38px",
          position: "absolute",
          top: "181px",
        }}
        linkArrowLLinkArrowLStyleOverride={{
          height: "25px",
          left: "38px",
          position: "absolute",
          top: "181px",
        }}
        linkArrowLText="Detaylar"
        linkArrowLText1="Detaylar"
        linkArrowLText2="Detaylar"
        linkArrowLText3="Detaylar"
        override={
          <IconImg3
            style={{
              backgroundImage:
                "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/icon-3-1@2x.png)",
              left: "30px",
              position: "absolute",
              top: "30px",
            }}
          />
        }
        override1={
          <IconImg3
            style={{
              backgroundImage:
                "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/icon-3@2x.png)",
              left: "30px",
              position: "absolute",
              top: "30px",
            }}
          />
        }
        style={{
          minWidth: "600px",
          position: "relative",
          width: "unset",
        }}
        text="Kumaşlarınızı tek tuşla 3D modeller üstünde görün."
        text1="Fotoğrafla Arama"
        text2="ReColor"
        text3="Dijital Showroom"
        text4="3D Görselleştirme"
      />
      <div className="feature-2">
        <div
          className="other-module-2"
          style={{
            backgroundImage:
              "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/about-img-6-1.png)",
          }}
        >
          <div className="info-wrapper">
            <div className="info-2">
              <div className="email-design-for">Yerli, genç ve yenilikçi!</div>
              <div className="about-us">Kartelam Ekibi</div>
              <p className="text-wrapper-4">
                Kartelam ekibi, tekstil ve teknoloji sektörlerinde deneyimli üyelerin bir araya gelmesiyle oluşan
                yenilikçi bir ekiptir. Alanlarında uzman, genç ve dinamik bir kadrodan oluşmaktadır.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="other-module-3">
        <div
          className="overlap-5"
          style={{
            backgroundImage:
              "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/cta-bg-8.png)",
          }}
        >
          <div className="text-wrapper-5">Kartelam Firmaları Toplam İhracatı</div>
          <div className="text-wrapper-6">Tanımlı Varyant</div>
          <h1 className="h-1">$200M+</h1>
          <div className="text-wrapper-7">90.000+</div>
          <div className="tamamlanan-proje">
            Tamamlanan
            <br />
            Proje
          </div>
          <div className="text-wrapper-8">200+</div>
        </div>
      </div>
      <Spacer
        style={{
          minWidth: "600px",
          position: "relative",
          width: "unset",
        }}
      />
      <Spacer
        style={{
          height: "10px",
          minWidth: "600px",
          position: "relative",
          width: "unset",
        }}
      />
      <div className="footer">
        <footer className="footer-2">
          <div className="overlap-group-5">
            <div className="column-8">
              <div className="text-wrapper-9">Abonelikten Ayrıl</div>
            </div>
            <div className="copyright-kartelam-wrapper">
              <p className="copyright-kartelam">
                <span className="span">Copyright ©</span>
                <a href="https://www.kartelam.com/" rel="noopener noreferrer" target="_blank">
                  <span className="text-wrapper-10">kartelam.com</span>
                </a>
                <span className="text-wrapper-11"> 2023 Tüm Hakları Saklıdır.</span>
              </p>
            </div>
          </div>
          <img
            className="divider"
            alt="Divider"
            src="https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/divider.svg"
          />
          <div className="column-9">
            <div className="text-wrapper-12">Diğer Linkler</div>
            <p className="SSS-kay-t-ol">
              <a href="https://www.kartelam.com/sss" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-13">
                  SSS
                  <br />
                </span>
              </a>
              <a href="https://kartelam.com/tr/login#/" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-14">
                  Kayıt Ol
                  <br />
                </span>
              </a>
              <a href="https://wa.me/2129748568" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-15">
                  Whatsapp Business
                  <br />
                </span>
              </a>
              <a href="https://kartelam.com/tr/privacy" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-16">Veri Gizliliği Politikası</span>
              </a>
            </p>
          </div>
          <div className="column-10">
            <div className="text-wrapper-17">İletişim Bilgileri</div>
            <p className="aray-n">
              Arayın: <br />
              +90 212 974 8568
              <br />
              Mail Atın: <br />
              info@kartelam.com
            </p>
          </div>
          <div className="column-11">
            <div className="a-d-blok-TEKMER-k-k">
              İAÜ D Blok TEKMER
              <br />
              Küçükçekmece/İSTANBUL
            </div>
            <div
              className="instagram"
              style={{
                backgroundImage:
                  "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/instagram@2x.png)",
              }}
            />
            <Link
              style={{
                backgroundImage:
                  "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/link@2x.png)",
                height: "30px",
                left: "0",
                position: "absolute",
                top: "109px",
                width: "30px",
              }}
            />
            <Facebook
              style={{
                backgroundImage:
                  "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/facebook@2x.png)",
                height: "30px",
                left: "80px",
                position: "absolute",
                top: "109px",
                width: "30px",
              }}
            />
            <Youtube
              style={{
                backgroundImage:
                  "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/youtube@2x.png)",
                height: "30px",
                left: "120px",
                position: "absolute",
                top: "108px",
                width: "30px",
              }}
            />
            <LogoAgencyWhite
              style={{
                backgroundImage:
                  "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/logo-agency-white-1@2x.png)",
                height: "31px",
                left: "0",
                position: "absolute",
                top: "0",
                width: "180px",
              }}
            />
          </div>
        </footer>
      </div>
    </div>
  );
};
