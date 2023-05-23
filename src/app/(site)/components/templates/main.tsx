import Hero from "./hero";
import CallToActionBanner from "./cta-banner";
import CalltoActionFullWidth from "./cta-fullwidthimage";
import CalltoActionLeftText from "./cta-lefttext";
import CalltoActionTextImage from "./cta-textimage";
import FeatureSection from "./feature-section";
import LogoCloudSection from "./logo-cloud-section";
import PricingSection from "./pricing-section";
import TestimonialSection from "./testimonials-section";
import ContactPage from "./contact-page";
import ContentSimple from "./content-simple";
import ServiceGrid from "./services-grid";
import TeamComponent from "./team-section";
import BlogSection from "./blog-section";
import DisclosureSection from "./disclosure-section";
import DisclosureGrid from "./disclosure-grid";
import LeadForm from "./lead-form";
import ServicesNoImage from "./services-no-image";
import GalleryMasonry from "./gallery-masonry";
import GallerySwiper from "./gallery-swiper";
import HeroSwiper from "./hero-swiper";
import TestimonialSwiper from "./testimonial-swiper";
import FeaturedGridImageTextOutside from "./featured-grid-image";
import FeaturedGridImageTextInside from "./featured-grid-text-inside";
import FeaturedGridBox from "./feature-grid-box";
import Map from "./map";
import AvailabilityTable from "./availability-table";

interface Props {
    pageBuilder: any[];
    allTestimonials: any;
    allBlog: any;
    allNeighborhood: any;
    allAvailabilities: any;
    // CONTACT
    email: string;
    phone_number: string;
    office_number: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    emailAlerts: string;
    sendFrom: string;
    emailBcc: string;
    emailCc: string;
    // SOCIAL
    facebook: any;
    youtube: any;
    instagram: any;
    twitter: any;
    reddit: any;
    linkedin: any;
    yelp: any;
    pinterest: any;
    tiktok: any;
    zillow: any;
}

export default function Main({
    pageBuilder,
    allTestimonials,
    allBlog,
    allNeighborhood,
    allAvailabilities,
    // CONTACT
    email,
    phone_number,
    office_number,
    address,
    city,
    state,
    zip_code,
    // SOCIAL
    facebook,
    youtube,
    instagram,
    twitter,
    reddit,
    linkedin,
    yelp,
    pinterest,
    tiktok,
    zillow,
    // FORM
    emailAlerts,
    sendFrom,
    emailBcc,
    emailCc,
}: Props) {
    return (
        <>
            {pageBuilder?.map((section: any) => {
                const bg = section?.background?.background;
                const textColor = section?.background?.contentColor?.hex;

                const backgroundStyles = {
                    color: textColor,
                    backgroundColor:
                        bg?.backgroundType === 'color' && bg?.color?.hex,
                    backgroundImage:
                        bg?.backgroundType === 'image' &&
                        `linear-gradient(rgba(
                            ${bg?.imageOverlayColor?.rgb.r ?? '0'},
                            ${bg?.imageOverlayColor?.rgb.g ?? '0'},
                            ${bg?.imageOverlayColor?.rgb.b ?? '0'},
                            ${bg?.imageOverlayColor?.rgb.a ?? '0.2'}
                            ),
                            rgba(
                            ${bg?.imageOverlayColor?.rgb.r ?? '0'},
                            ${bg?.imageOverlayColor?.rgb.g ?? '0'},
                            ${bg?.imageOverlayColor?.rgb.b ?? '0'},
                            ${bg?.imageOverlayColor?.rgb.a ?? '0.2'}
                            )),
                            url(${section?.backgroundImage?.image?.asset?.url})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                };

                // PRIMARY BUTTON STYLES
                const primaryButton = {
                    backgroundColor: `rgba(
                        ${section?.button?.buttonBackground?.rgb.r}, 
                        ${section?.button?.buttonBackground?.rgb.g}, 
                        ${section?.button?.buttonBackground?.rgb.b}, 
                        ${section?.button?.buttonBackground?.rgb.a})`,
                    color: `${section?.button?.buttonTextColor?.hex}`,
                    border: `1px solid ${section?.button?.buttonBorderColor?.hex}`
                }

                // SECONDARY BUTTON STYLES
                const secondaryButton = {
                    backgroundColor: `rgba(
                        ${section?.secondaryButton?.buttonBackground?.rgb.r}, 
                        ${section?.secondaryButton?.buttonBackground?.rgb.g}, 
                        ${section?.secondaryButton?.buttonBackground?.rgb.b}, 
                        ${section?.secondaryButton?.buttonBackground?.rgb.a})`,
                    color: `${section?.secondaryButton?.buttonTextColor?.hex}`,
                    border: `1px solid ${section?.secondaryButton?.buttonBorderColor?.hex}`
                }

                if (section._type === 'hero') {
                    return (
                        <>
                            {section?.layoutType === 'static' ?
                                <Hero
                                    key={section?._key}
                                    content={section?.content}
                                    image={section?.imageData?.asset?.url}
                                    altText={section?.imageData?.asset?.altText}
                                    blurData={section?.imageData?.asset?.lqip}
                                    textAlign={section?.textAlign}
                                    textColor={section?.textColor?.hex}
                                    // PRIMARY BUTTON
                                    primaryButtonText={section?.buttonLinking?.buttonText}
                                    primaryButtonLink={section?.buttonLinking}
                                    primaryButtonStyle={primaryButton}
                                    // SECONDARY BUTTON
                                    secondaryButtonLink={section?.secondButtonLinking}
                                    secondaryButtonText={section?.secondButtonLinking?.buttonText}
                                    secondaryButtonStyle={secondaryButton}
                                    imageOverlayColor={section?.imageOverlayColor}
                                    imageHeight={section?.imageHeight}
                                />
                                :
                                <HeroSwiper
                                    key={section?._key}
                                    images={section?.childImage}
                                    textAlign={section?.textAlign}
                                    imageOverlayColor={section?.imageOverlayColor}
                                    textColor={section?.textColor?.hex}
                                    imageHeight={section?.imageHeight}
                                    animation={section?.animation}
                                    navigationColors={section?.navigationColors?.hex}
                                />
                            }
                        </>
                    );
                }

                if (section._type === 'mapDisplay') {
                    return (
                        <Map
                            key={section?._key}
                            content={section?.content}
                            textAlign={section?.textAlign}
                            backgroundStyles={backgroundStyles}
                            mapNames={allNeighborhood?.neighborhoods}
                            condo={allNeighborhood?.condo}
                            // PRIMARY BUTTON
                            primaryButtonText={section?.buttonLinking?.buttonText}
                            primaryButtonLink={section?.buttonLinking}
                            primaryButtonStyle={primaryButton}
                            // SECONDARY BUTTON
                            secondaryButtonLink={section?.secondButtonLinking}
                            secondaryButtonText={section?.secondButtonLinking?.buttonText}
                            secondaryButtonStyle={secondaryButton}
                        />
                    );
                }

                if (section._type === 'availabilityDisplay') {
                    return (
                        <AvailabilityTable
                            key={section?._key}
                            content={section?.content}
                            textAlign={section?.textAlign}
                            backgroundStyles={backgroundStyles}
                            availabilities={allAvailabilities}
                            // PRIMARY BUTTON
                            primaryButtonText={section?.buttonLinking?.buttonText}
                            primaryButtonLink={section?.buttonLinking}
                            primaryButtonStyle={primaryButton}
                            // SECONDARY BUTTON
                            secondaryButtonLink={section?.secondButtonLinking}
                            secondaryButtonText={section?.secondButtonLinking?.buttonText}
                            secondaryButtonStyle={secondaryButton}
                        />
                    );
                }

                if (section._type === 'contentField') {
                    return (
                        <ContentSimple
                            key={section?._key}
                            content={section?.content}
                            layoutType={section?.layoutType}
                            heading={section?.heading}
                            backgroundStyles={backgroundStyles}
                        />
                    );
                }

                if (section._type === 'gallery') {
                    return (
                        <>
                            {section?.layoutType === 'masonryGallery' ?
                                <GalleryMasonry
                                    content={section?.content}
                                    images={section?.childImage}
                                    disablePagination={section?.disablePagination}
                                    textAlign={section?.textAlign}
                                    backgroundStyles={backgroundStyles}
                                    // PRIMARY BUTTON
                                    primaryButtonText={section?.buttonLinking?.buttonText}
                                    primaryButtonLink={section?.buttonLinking}
                                    primaryButtonStyle={primaryButton}
                                    // SECONDARY BUTTON
                                    secondaryButtonLink={section?.secondButtonLinking}
                                    secondaryButtonText={section?.secondButtonLinking?.buttonText}
                                    secondaryButtonStyle={secondaryButton}
                                />
                                :
                                <GallerySwiper
                                    content={section?.content}
                                    images={section?.childImage}
                                    disablePagination={section?.disablePagination}
                                    disableNavigation={section?.disableNavigation}
                                    slideNumber={section?.slideNumber}
                                    textAlign={section?.textAlign}
                                    backgroundStyles={backgroundStyles}
                                    // PRIMARY BUTTON
                                    primaryButtonText={section?.buttonLinking?.buttonText}
                                    primaryButtonLink={section?.buttonLinking}
                                    primaryButtonStyle={primaryButton}
                                    // SECONDARY BUTTON
                                    secondaryButtonLink={section?.secondButtonLinking}
                                    secondaryButtonText={section?.secondButtonLinking?.buttonText}
                                    secondaryButtonStyle={secondaryButton}
                                    navigationColors={section?.navigationColors?.hex}
                                />
                            }
                        </>
                    );
                }

                if (section._type === 'ctaSection') {
                    return (
                        <>
                            {section.layoutType === 'banner' &&
                                <CallToActionBanner
                                    key={section?._key}
                                    textAlign={section?.textAlign}
                                    content={section?.content}
                                    // PRIMARY BUTTON
                                    primaryButtonText={section?.buttonLinking?.buttonText}
                                    primaryButtonLink={section?.buttonLinking}
                                    primaryButtonStyle={primaryButton}
                                    // SECONDARY BUTTON
                                    secondaryButtonLink={section?.secondButtonLinking}
                                    secondaryButtonText={section?.secondButtonLinking?.buttonText}
                                    secondaryButtonStyle={secondaryButton}
                                    backgroundStyles={backgroundStyles}
                                />
                            }
                            {section.layoutType === 'textAndImage' &&
                                <CalltoActionTextImage
                                    key={section?._key}
                                    image={section?.imageData?.asset?.url}
                                    content={section?.content}
                                    reverseColumn={section?.reverseColumn}
                                    altText={section?.imageData?.asset?.altText}
                                    blurData={section?.imageData?.asset?.lqip}
                                    // PRIMARY BUTTON
                                    primaryButtonText={section?.buttonLinking?.buttonText}
                                    primaryButtonLink={section?.buttonLinking}
                                    primaryButtonStyle={primaryButton}
                                    // SECONDARY BUTTON
                                    secondaryButtonLink={section?.secondButtonLinking}
                                    secondaryButtonText={section?.secondButtonLinking?.buttonText}
                                    secondaryButtonStyle={secondaryButton}
                                    backgroundStyles={backgroundStyles}
                                    textAlign={section?.textAlign}
                                />
                            }
                            {section.layoutType === 'fullWidthTextImage' &&
                                <CalltoActionFullWidth
                                    key={section?._key}
                                    image={section?.imageData?.asset?.url}
                                    content={section?.content}
                                    reverseColumn={section?.reverseColumn}
                                    altText={section?.imageData?.asset?.altText}
                                    blurData={section?.imageData?.asset?.lqip}
                                    textAlign={section?.textAlign}
                                    backgroundStyles={backgroundStyles}
                                    // PRIMARY BUTTON
                                    primaryButtonText={section?.buttonLinking?.buttonText}
                                    primaryButtonLink={section?.buttonLinking}
                                    primaryButtonStyle={primaryButton}
                                    // SECONDARY BUTTON
                                    secondaryButtonLink={section?.secondButtonLinking}
                                    secondaryButtonText={section?.secondButtonLinking?.buttonText}
                                    secondaryButtonStyle={secondaryButton}
                                />
                            }
                            {section.layoutType === 'ButtonRightTextLeft' &&
                                <CalltoActionLeftText
                                    key={section?._key}
                                    content={section?.content}
                                    // PRIMARY BUTTON
                                    primaryButtonText={section?.buttonLinking?.buttonText}
                                    buttonLink={section?.buttonLinking}
                                    primaryButtonStyle={primaryButton}
                                    // SECONDARY BUTTON
                                    secondaryButtonLink={section?.secondButtonLinking}
                                    secondaryButtonText={section?.secondButtonLinking?.buttonText}
                                    secondaryButtonStyle={secondaryButton}
                                    backgroundStyles={backgroundStyles}
                                />
                            }
                        </>
                    )
                }

                if (section._type === 'logos') {
                    return (
                        <LogoCloudSection
                            key={section?._key}
                            content={section?.content}
                            backgroundStyles={backgroundStyles}
                            images={section?.childImage}
                            textAlign={section?.textAlign}
                            // PRIMARY BUTTON
                            primaryButtonText={section?.buttonLinking?.buttonText}
                            primaryButtonLink={section?.buttonLinking}
                            primaryButtonStyle={primaryButton}
                            // SECONDARY BUTTON
                            secondaryButtonLink={section?.secondButtonLinking}
                            secondaryButtonText={section?.secondButtonLinking?.buttonText}
                            secondaryButtonStyle={secondaryButton}
                        />
                    );
                }

                if (section._type === 'pricing') {
                    return (
                        <PricingSection
                            key={section?._key}
                            packages={section?.packages}
                            packageTextColor={section?.packageTextColor?.hex}
                            packageBackground={section?.packageBackground?.hex}
                            columnNumber={section?.columnNumber}
                            content={section?.content}
                            textAlign={section?.textAlign}
                            backgroundStyles={backgroundStyles}
                            // PRIMARY BUTTON
                            primaryButtonText={section?.buttonLinking?.buttonText}
                            primaryButtonLink={section?.buttonLinking}
                            primaryButtonStyle={primaryButton}
                            // SECONDARY BUTTON
                            secondaryButtonLink={section?.secondButtonLinking}
                            secondaryButtonText={section?.secondButtonLinking?.buttonText}
                            secondaryButtonStyle={secondaryButton}
                        />
                    );
                }

                if (section._type === 'testimonialBuilder') {
                    return (
                        <>
                            {section?.layoutType == 'gridView' &&
                                <TestimonialSection
                                    key={section?._key}
                                    testimonials={allTestimonials}
                                    content={section?.content}
                                    textAlign={section?.textAlign}
                                    backgroundStyles={backgroundStyles}
                                    // PRIMARY BUTTON
                                    primaryButtonText={section?.buttonLinking?.buttonText}
                                    primaryButtonLink={section?.buttonLinking}
                                    primaryButtonStyle={primaryButton}
                                    // SECONDARY BUTTON
                                    secondaryButtonLink={section?.secondButtonLinking}
                                    secondaryButtonText={section?.secondButtonLinking?.buttonText}
                                    secondaryButtonStyle={secondaryButton}
                                />
                            }
                            {section?.layoutType == 'slider' &&
                                <TestimonialSwiper
                                    key={section?._key}
                                    testimonials={allTestimonials}
                                    content={section?.content}
                                    textAlign={section?.textAlign}
                                    backgroundStyles={backgroundStyles}
                                    // PRIMARY BUTTON
                                    primaryButtonText={section?.buttonLinking?.buttonText}
                                    primaryButtonLink={section?.buttonLinking}
                                    primaryButtonStyle={primaryButton}
                                    // SECONDARY BUTTON
                                    secondaryButtonLink={section?.secondButtonLinking}
                                    secondaryButtonText={section?.secondButtonLinking?.buttonText}
                                    secondaryButtonStyle={secondaryButton}
                                    slideNumber={section?.slideNumber}
                                    navigationColors={section?.navigationColors.hex}
                                />
                            }
                        </>
                    );
                }

                if (section._type === 'featuredGrid') {
                    return (
                        <>
                            {section?.layoutType === 'gridWithImageOutside' &&
                                <FeaturedGridImageTextOutside
                                    key={section?._key}
                                    columnNumber={section?.columnNumber}
                                    blocks={section?.childBlocks}
                                    backgroundStyles={backgroundStyles}
                                    content={section?.content}
                                    textAlign={section?.textAlign}
                                    // PRIMARY BUTTON
                                    primaryButtonText={section?.buttonLinking?.buttonText}
                                    primaryButtonLink={section?.buttonLinking}
                                    primaryButtonStyle={primaryButton}
                                    // SECONDARY BUTTON
                                    secondaryButtonLink={section?.secondButtonLinking}
                                    secondaryButtonText={section?.secondButtonLinking?.buttonText}
                                    secondaryButtonStyle={secondaryButton}
                                />
                            }
                            {section?.layoutType === 'featuredGridIcon' &&
                                <FeatureSection
                                    key={section?._key}
                                    columnNumber={section?.columnNumber}
                                    blocks={section?.childBlocks}
                                    backgroundStyles={backgroundStyles}
                                    content={section?.content}
                                    textAlign={section?.textAlign}
                                    // PRIMARY BUTTON
                                    primaryButtonText={section?.buttonLinking?.buttonText}
                                    primaryButtonLink={section?.buttonLinking}
                                    primaryButtonStyle={primaryButton}
                                    // SECONDARY BUTTON
                                    secondaryButtonLink={section?.secondButtonLinking}
                                    secondaryButtonText={section?.secondButtonLinking?.buttonText}
                                    secondaryButtonStyle={secondaryButton}
                                />
                            }
                            {section?.layoutType === 'gridWithTextInside' &&
                                <FeaturedGridImageTextInside
                                    key={section?._key}
                                    columnNumber={section?.columnNumber}
                                    blocks={section?.childBlocks}
                                    backgroundStyles={backgroundStyles}
                                    content={section?.content}
                                    textAlign={section?.textAlign}
                                    // PRIMARY BUTTON
                                    primaryButtonText={section?.buttonLinking?.buttonText}
                                    primaryButtonLink={section?.buttonLinking}
                                    primaryButtonStyle={primaryButton}
                                    // SECONDARY BUTTON
                                    secondaryButtonLink={section?.secondButtonLinking}
                                    secondaryButtonText={section?.secondButtonLinking?.buttonText}
                                    secondaryButtonStyle={secondaryButton}
                                />
                            }
                            {section?.layoutType === 'featuredBox' &&
                                <FeaturedGridBox
                                    key={section?._key}
                                    gridBackgroundColor={section?.gridBackgroundColor?.hex}
                                    offsetTop={section?.offsetTop}
                                    columnNumber={section?.columnNumber}
                                    blocks={section?.childBlocks}
                                    backgroundStyles={backgroundStyles}
                                    content={section?.content}
                                    textAlign={section?.textAlign}
                                    // PRIMARY BUTTON
                                    primaryButtonText={section?.buttonLinking?.buttonText}
                                    primaryButtonLink={section?.buttonLinking}
                                    primaryButtonStyle={primaryButton}
                                    // SECONDARY BUTTON
                                    secondaryButtonLink={section?.secondButtonLinking}
                                    secondaryButtonText={section?.secondButtonLinking?.buttonText}
                                    secondaryButtonStyle={secondaryButton}
                                />
                            }
                        </>
                    );
                }

                if (section._type === 'disclosureSection') {
                    return (
                        <>
                            {section?.layoutType === 'twoColumn' ?
                                <DisclosureGrid
                                    key={section?._key}
                                    disclosure={section?.disclosures}
                                    disclosureBackgroundColor={section?.disclosureBackgroundColor}
                                    disclosureTextColor={section?.disclosureTextColor}
                                    disclosureContentColor={section?.disclosureContentColor}
                                    backgroundStyles={backgroundStyles}
                                    content={section?.content}
                                    textAlign={section?.textAlign}
                                    // PRIMARY BUTTON
                                    primaryButtonText={section?.buttonLinking?.buttonText}
                                    primaryButtonLink={section?.buttonLinking}
                                    primaryButtonStyle={primaryButton}
                                    // SECONDARY BUTTON
                                    secondaryButtonLink={section?.secondButtonLinking}
                                    secondaryButtonText={section?.secondButtonLinking?.buttonText}
                                    secondaryButtonStyle={secondaryButton}
                                />
                                :
                                <DisclosureSection
                                    key={section?._key}
                                    disclosure={section?.disclosures}
                                    disclosureBackgroundColor={section?.disclosureBackgroundColor}
                                    disclosureTextColor={section?.disclosureTextColor}
                                    disclosureContentColor={section?.disclosureContentColor}
                                    backgroundStyles={backgroundStyles}
                                    content={section?.content}
                                    textAlign={section?.textAlign}
                                    // PRIMARY BUTTON
                                    primaryButtonText={section?.buttonLinking?.buttonText}
                                    primaryButtonLink={section?.buttonLinking}
                                    primaryButtonStyle={primaryButton}
                                    // SECONDARY BUTTON
                                    secondaryButtonLink={section?.secondButtonLinking}
                                    secondaryButtonText={section?.secondButtonLinking?.buttonText}
                                    secondaryButtonStyle={secondaryButton}
                                />
                            }
                        </>
                    );
                }

                if (section._type === 'blogDisplay') {
                    return (
                        <BlogSection
                            key={section?._key}
                            blog={allBlog}
                            content={section?.content}
                            textAlign={section?.textAlign}
                            backgroundStyles={backgroundStyles}
                            // PRIMARY BUTTON
                            primaryButtonText={section?.buttonLinking?.buttonText}
                            primaryButtonLink={section?.buttonLinking}
                            primaryButtonStyle={primaryButton}
                            // SECONDARY BUTTON
                            secondaryButtonLink={section?.secondButtonLinking}
                            secondaryButtonText={section?.secondButtonLinking?.buttonText}
                            secondaryButtonStyle={secondaryButton}
                        />
                    );
                }

                if (section._type === 'contactPage') {
                    return (
                        <ContactPage
                            key={section?._key}
                            content={section?.content}
                            backgroundStyles={backgroundStyles}
                            // CONTACT
                            hideContact={section?.hideContact}
                            email={email}
                            phone_number={phone_number}
                            office_number={office_number}
                            address={address}
                            city={city}
                            state={state}
                            zip_code={zip_code}
                            // SOCIAL
                            facebook={facebook}
                            youtube={youtube}
                            instagram={instagram}
                            twitter={twitter}
                            reddit={reddit}
                            linkedin={linkedin}
                            yelp={yelp}
                            pinterest={pinterest}
                            tiktok={tiktok}
                            zillow={zillow}
                            // FORMS
                            formBuilder={section?.formBuilder}
                            emailAlerts={emailAlerts}
                            sendFrom={sendFrom}
                            emailBcc={emailBcc}
                            emailCc={emailCc}
                        />
                    );
                }

                if (section._type === 'leadForm') {
                    return (
                        <LeadForm
                            key={section?._key}
                            formSchema={section?.formBuilder}
                            content={section?.content}
                            backgroundStyles={backgroundStyles}
                            textAlign={section?.textAlign}
                            // PRIMARY BUTTON
                            primaryButtonText={section?.buttonLinking?.buttonText}
                            primaryButtonLink={section?.buttonLinking}
                            primaryButtonStyle={primaryButton}
                            // SECONDARY BUTTON
                            secondaryButtonLink={section?.secondButtonLinking}
                            secondaryButtonText={section?.secondButtonLinking?.buttonText}
                            secondaryButtonStyle={secondaryButton}
                        />
                    );
                }

                if (section._type === 'codeBlock') {
                    return (
                        <div key={section._key}>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: `${section?.code}`
                                }}
                            />
                        </div>
                    )
                }

                return null; // Add a default return value or handle other section types if needed
            })}
        </>
    );
}