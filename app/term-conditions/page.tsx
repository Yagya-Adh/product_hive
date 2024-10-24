import MainBanner from "../components/banner/MainBanner";
import TermConditionBody from "../components/term-condition-body/TermConditionBody";
import PageBanner from "../components/banner/PageBanner";

const TermsCondition = () => {
  return (
    <>
      <MainBanner variant="terms-condition" />
      <TermConditionBody />
      <TermsFooter />
    </>
  );
};

export default TermsCondition;

const TermsFooter = () => {
  return (
    <div className="bg-productHives-mainBackground">
      <PageBanner variant="terms-condition-footer" />
    </div>
  );
};
