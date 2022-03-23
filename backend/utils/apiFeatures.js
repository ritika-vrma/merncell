class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword ? {
            companyName: {
                $in: this.queryStr.keyword
            },

        } : {};
        this.query = this.query.find({ ...keyword });
        return this;

    }

    filter() {
        const queryCopy = { ...this.queryStr };
        //Remove Some Fields for Eligibility : either BCOM / BCA or any other
        const removeFields = ['keyword', 'page', 'limit'];

        removeFields.forEach((key) => delete queryCopy[key]);

        // Filter for
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    eligibilityOR() {
        const eligibility = this.queryStr.eligibility ? {
            eligibility: {
                $in: this.queryStr.eligibility
            },

        } : {};

        this.query = this.query.find({ ...eligibility });
        return this;
    }

    classOR() {
        const classOR = this.queryStr.class ? {
            class: {
                $in: this.queryStr.class
            },

        } : {};

        this.query = this.query.find({ ...classOR });
        return this;
    }
    isApprovedJob() {
        const approve_reject = this.queryStr.approve_reject ? {
            approve_reject: {
                $in: this.queryStr.approve_reject
            },

        } : {};

        this.query = this.query.find({ ...approve_reject });
        return this;
    }

    jobTypeOR() {
        const jobTypeOR = this.queryStr.jobType ? {
            jobType: {
                $in: this.queryStr.jobType
            },

        } : {};

        this.query = this.query.find({ ...jobTypeOR });
        return this;
    }

    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;

        const skip = resultPerPage * (currentPage - 1);

        this.query = this.query.limit(resultPerPage).skip(skip);

        return this;

    }

    // sort(){
    //     const lastDateToApply = 
    // }

};

module.exports = ApiFeatures;